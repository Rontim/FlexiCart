import datetime
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from django.contrib.auth.tokens import default_token_generator

from .models import User
from .serializers import ActivationSerializer, PasswordResetConfirmSerializer, UserSerializer, UserCreateSerializer
from user_service import serializers


class UserCreateView(APIView):
    """
    Create a new user.
    """

    def post(self, request):
        password = request.data.get('password')
        password_confirmation = request.data.get('re_password')

        if password != password_confirmation:
            return Response(
                {'error': 'Passwords do not match.'},
                status=status.HTTP_400_BAD_REQUEST,
            )

        request.data['is_active'] = False

        serializer = UserCreateSerializer(data=request.data)

        if serializer.is_valid():
            # TODO: Call a celery task to send an email to the user with a link to activate their account.

            serializer.save()
            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED,
            )
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST,
        )


class ActivateAccount(APIView):
    """
    Activate a user's account.

    """
    token_generator = default_token_generator

    def post(self, request):
        serializer = ActivationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.user  # type: ignore
        user.is_active = True

        user.save()

        # TODO: Call a celery task to send an email to the user to notify them that their account has been activated.

        return Response(
            {'message': 'Account activated successfully.'},
            status=status.HTTP_200_OK,
        )


class ResendActivationEmail(APIView):
    """
    Resend an activation email to a user.
    """

    def post(self, request):
        email = request.data.get('email')

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response(
                {'error': 'User with that email does not exist.'},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if user.is_active:
            return Response(
                {'error': 'User is already active.'},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # TODO: Call a celery task to send an email to the user with a link to activate their account.

        return Response(
            {'message': 'Activation email sent.'},
            status=status.HTTP_200_OK,
        )


class PasswordResetView(APIView):
    """
    Send a password reset email to a user.
    """

    def post(self, request):
        email = request.data.get('email')

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response(
                {'error': 'User with that email does not exist.'},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # TODO: Call a celery task to send an email to the user with a link to reset their password.

        return Response(
            {'message': 'Password reset email sent.'},
            status=status.HTTP_200_OK,
        )


class PasswordResetConfirmView(APIView):
    """
    Reset a user's password.
    """
    token_generator = default_token_generator

    def post(self, request):
        serializer = PasswordResetConfirmSerializer(data=request.data)

        serializer.is_valid(raise_exception=True)

        serializer.user.set_password(  # type: ignore
            request.data['new_password'])

        if hasattr(serializer.user, 'last_login'):  # type: ignore
            serializer.user.last_login = datetime.datetime.now()  # type: ignore

        serializer.user.save()  # type: ignore

        # TODO: Call a celery task to send an email to the user to notify them that their password has been reset.

        return Response(
            {'message': 'Password reset successfully.'},
            status=status.HTTP_200_OK,
        )
