import re
import token
from urllib import request
from uu import decode
from django.contrib.auth import get_user_model, update_session_auth_hash
from django.contrib.auth.tokens import default_token_generator
from django.utils.timezone import now
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.exceptions import NotFound
from rest_framework.response import Response

from djoser import signals, utils
from djoser.compat import get_user_email
from djoser.conf import settings

from .tasks import send_activation_email, send_confirmation_email

User = get_user_model()


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = settings.SERIALIZERS.user
    queryset = User.objects.all()
    permission_classes = settings.PERMISSIONS.user
    token_generator = default_token_generator
    lookup_field = settings.USER_ID_FIELD

    def permission_denied(self, request, **kwargs):
        if (
            settings.HIDE_USERS
            and request.user.is_authenticated
            and self.action in ["update", "partial_update", "list", "retrieve"]
        ):
            raise NotFound()
        super().permission_denied(request, **kwargs)

    def get_queryset(self):
        user = self.request.user
        queryset = super().get_queryset()
        if settings.HIDE_USERS and self.action == "list" and not user.is_staff:  # type: ignore
            queryset = queryset.filter(pk=user.pk)
        return queryset

    def get_permissions(self):
        if self.action == "create":
            self.permission_classes = settings.PERMISSIONS.user_create
        elif self.action == "activation":
            self.permission_classes = settings.PERMISSIONS.activation
        elif self.action == "resend_activation":
            self.permission_classes = settings.PERMISSIONS.password_reset
        elif self.action == "list":
            self.permission_classes = settings.PERMISSIONS.user_list
        elif self.action == "reset_password":
            self.permission_classes = settings.PERMISSIONS.password_reset
        elif self.action == "reset_password_confirm":
            self.permission_classes = settings.PERMISSIONS.password_reset_confirm
        elif self.action == "set_password":
            self.permission_classes = settings.PERMISSIONS.set_password
        elif self.action == "set_username":
            self.permission_classes = settings.PERMISSIONS.set_username
        elif self.action == "reset_username":
            self.permission_classes = settings.PERMISSIONS.username_reset
        elif self.action == "reset_username_confirm":
            self.permission_classes = settings.PERMISSIONS.username_reset_confirm
        elif self.action == "destroy" or (
            self.action == "me" and self.request and self.request.method == "DELETE"
        ):
            self.permission_classes = settings.PERMISSIONS.user_delete
        return super().get_permissions()

    def get_serializer_class(self):
        if self.action == "create":
            if settings.USER_CREATE_PASSWORD_RETYPE:
                return settings.SERIALIZERS.user_create_password_retype
            return settings.SERIALIZERS.user_create
        elif self.action == "destroy" or (
            self.action == "me" and self.request and self.request.method == "DELETE"
        ):
            return settings.SERIALIZERS.user_delete
        elif self.action == "activation":
            return settings.SERIALIZERS.activation
        elif self.action == "resend_activation":
            return settings.SERIALIZERS.password_reset
        elif self.action == "reset_password":
            return settings.SERIALIZERS.password_reset
        elif self.action == "reset_password_confirm":
            if settings.PASSWORD_RESET_CONFIRM_RETYPE:
                return settings.SERIALIZERS.password_reset_confirm_retype
            return settings.SERIALIZERS.password_reset_confirm
        elif self.action == "set_password":
            if settings.SET_PASSWORD_RETYPE:
                return settings.SERIALIZERS.set_password_retype
            return settings.SERIALIZERS.set_password
        elif self.action == "set_username":
            if settings.SET_USERNAME_RETYPE:
                return settings.SERIALIZERS.set_username_retype
            return settings.SERIALIZERS.set_username
        elif self.action == "reset_username":
            return settings.SERIALIZERS.username_reset
        elif self.action == "reset_username_confirm":
            if settings.USERNAME_RESET_CONFIRM_RETYPE:
                return settings.SERIALIZERS.username_reset_confirm_retype
            return settings.SERIALIZERS.username_reset_confirm
        elif self.action == "me":
            return settings.SERIALIZERS.current_user

        return self.serializer_class

    def get_instance(self):
        return self.request.user

    def perform_create(self, serializer, *args, **kwargs):
        user = serializer.save(*args, **kwargs)
        signals.user_registered.send(
            sender=self.__class__, user=user, request=self.request
        )

        protocol = self.request.scheme
        to = get_user_email(user)
        token = self.token_generator.make_token(user)
        print(f'token: {token}')
        send_activation_email.delay(to, protocol, token)  # type: ignore

    def perform_update(self, serializer, *args, **kwargs):
        super().perform_update(serializer, *args, **kwargs)
        user = serializer.instance
        signals.user_updated.send(
            sender=self.__class__, user=user, request=self.request
        )

        # should we send activation email after update?
        if not user.is_active:
            # TODO: add celery task to send email for account activation
            pass

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)

        if instance == request.user:
            utils.logout_user(self.request)
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(["get", "put", "patch", "delete"], detail=False)
    def me(self, request, *args, **kwargs):
        self.get_object = self.get_instance
        if request.method == "GET":
            return self.retrieve(request, *args, **kwargs)
        elif request.method == "PUT":
            return self.update(request, *args, **kwargs)
        elif request.method == "PATCH":
            return self.partial_update(request, *args, **kwargs)
        elif request.method == "DELETE":
            return self.destroy(request, *args, **kwargs)

    @action(["post"], detail=False)
    def activation(self, request, *args, **kwargs):
        uid = request.data.get("uid")
        token = request.data.get("token")

        if not uid or not token:
            return Response({'uid': 'Invalid user id or user doesn\'t exist.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            uid = utils.decode_uid(uid)
            user = User.objects.get(pk=uid)
        except (User.DoesNotExist, ValueError, TypeError, OverflowError):
            raise NotFound()

        print(user)
        print(
            f'request token: {token} vs user token: {self.token_generator.make_token(user)}')

        if not self.token_generator.check_token(user, token):
            return Response({'token': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)

        signals.user_activated.send(
            sender=self.__class__, user=user, request=self.request
        )

        user.is_active = True
        user.save()

        email = get_user_email(user)

        send_confirmation_email.delay(email)  # type: ignore

        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(["post"], detail=False)
    def resend_activation(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.get_user(is_active=False)

        if not settings.SEND_ACTIVATION_EMAIL:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        if user:
            context = {"user": user}
            to = [get_user_email(user)]
            settings.EMAIL.activation(self.request, context).send(to)

        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(["post"], detail=False)
    def reset_password(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.get_user()

        if user:
            # TODO: add celery task to send email for password reset
            pass

        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(["post"], detail=False)
    def reset_password_confirm(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        serializer.user.set_password(serializer.data["new_password"])
        if hasattr(serializer.user, "last_login"):
            serializer.user.last_login = now()
        serializer.user.save()

        # TODO: add celery task to send password reset confirmation

        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(["post"], detail=False,
            url_path=f"reset_{User.USERNAME_FIELD}")  # type: ignore
    def reset_username(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.get_user()

        if user:
            # TODO: add celery task to send email for username reset
            pass

        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(["post"], detail=False,
            url_path=f"reset_{User.USERNAME_FIELD}_confirm")  # type: ignore
    def reset_username_confirm(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        new_username = serializer.data["new_" +
                                       User.USERNAME_FIELD]  # type: ignore

        setattr(serializer.user, User.USERNAME_FIELD,  # type: ignore
                new_username)
        if hasattr(serializer.user, "last_login"):
            serializer.user.last_login = now()
        serializer.user.save()

        # TODO: add celery task to send username reset confirmation

        return Response(status=status.HTTP_204_NO_CONTENT)
