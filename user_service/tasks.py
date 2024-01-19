from django import conf
from django.contrib.auth.tokens import default_token_generator
from templated_mail.mail import BaseEmailMessage
from celery import shared_task

from djoser import utils
from djoser.conf import settings


class ActivationEmail(BaseEmailMessage):
    template_name = "email/activation.html"

    def get_context_data(self):
        context = super().get_context_data()

        user = context.get("user")
        context["uid"] = utils.encode_uid(user.pk)  # type: ignore
        context["token"] = default_token_generator.make_token(user)
        context["url"] = settings.ACTIVATION_URL.format(**context)
        return context

    @shared_task(bind=True)
    def send_activation(self, to, *args, **kwargs):
        return self.send(to, *args, **kwargs)


class ConfirmationEmail(BaseEmailMessage):
    template_name = "email/confirmation.html"

    @shared_task(bind=True)
    def send_confirmation(self, to, *args, **kwargs):
        return self.send(to, *args, **kwargs)


class PasswordResetEmail(BaseEmailMessage):
    template_name = "email/password_reset.html"

    def get_context_data(self):
        context = super().get_context_data()

        user = context.get("user")
        context["uid"] = utils.encode_uid(user.pk)  # type: ignore
        context["token"] = default_token_generator.make_token(user)
        context["url"] = settings.PASSWORD_RESET_CONFIRM_URL.format(**context)
        return context

    @shared_task(bind=True)
    def send_password_reset(self, to, *args, **kwargs):
        return self.send(to, *args, **kwargs)


class PasswordChangedConfirmationEmail(BaseEmailMessage):
    template_name = "email/password_changed_confirmation.html"

    @shared_task(bind=True)
    def send_password_changed(self, to, *args, **kwargs):
        return self.send(to, *args, **kwargs)


class UsernameChangedConfirmationEmail(BaseEmailMessage):
    template_name = "email/username_changed_confirmation.html"

    @shared_task(bind=True)
    def send_username_change(self, to, *args, **kwargs):
        return self.send(to, *args, **kwargs)


class UsernameResetEmail(BaseEmailMessage):
    template_name = "email/username_reset.html"

    def get_context_data(self):
        context = super().get_context_data()

        user = context.get("user")
        context["uid"] = utils.encode_uid(user.pk)  # type: ignore
        context["token"] = default_token_generator.make_token(user)
        context["url"] = settings.USERNAME_RESET_CONFIRM_URL.format(**context)
        return context

    @shared_task(bind=True)
    def send_username_reset(self, to, *args, **kwargs):
        return self.send(to, *args, **kwargs)
