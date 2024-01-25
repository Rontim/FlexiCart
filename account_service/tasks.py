from celery import shared_task
from django.conf import settings as django_settings
from django.core.mail import EmailMessage
from django.contrib.auth.tokens import default_token_generator
from django.template.loader import render_to_string
from django.contrib.auth import get_user_model

from flexi_cart import settings, utils

User = get_user_model()
SITE_NAME = settings.SITE_NAME
DOMAIN = settings.DOMAIN


@shared_task(bind=True, name='send_activation_email')
def send_activation_email(self, email, protocol, token):
    from djoser.conf import settings

    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        raise Exception('User does not exist')

    context = {
        'user': user,
        'domain': DOMAIN,
        'uid': utils.encode_uid(user.pk),
        'token': token,
        'protocol': protocol,
        'site_name': SITE_NAME,
    }

    context['url'] = settings.ACTIVATION_URL.format(**context)

    subject = f'Account activation on {SITE_NAME}'
    body = render_to_string('email/activation.html', context)
    to = [email]

    message = EmailMessage(
        subject=subject,
        body=body,
        to=to,
    )
    message.content_subtype = 'html'
    message.send()


@shared_task(bind=True, name='send_confirmation_email')
def send_confirmation_email(self, email):
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        raise Exception('User does not exist')

    to = [email]
    subject = '{SITE_NAME} - Your account has been successfully created and activated!'
    body = render_to_string(
        'email/confirmation.html', {'site_name': SITE_NAME})

    message = EmailMessage(
        subject=subject,
        body=body,
        to=to,
    )
    message.content_subtype = 'html'
    message.send()
