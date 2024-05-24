from datetime import timedelta
import sys
# import dj_database_url
import dotenv
from os import getenv, path
from pathlib import Path

from django.core.management.utils import get_random_secret_key


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

dotenv_file = BASE_DIR / ".env"
if dotenv_file.is_file():
    dotenv.load_dotenv(dotenv_file)

DEVELOPMENT_MODE = getenv('DEVELOPMENT_MODE', False) == 'True'

SECRET_KEY = getenv('SECRET_KEY', get_random_secret_key())

DEBUG = getenv('DEBUG', False) == 'True'

ALLOWED_HOSTS = getenv(
    'ALLOWED_HOSTS', '127.0.0.1,localhost,0.0.0.0').split(',')

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'flexi_cart.apps.FlexiCartConfig',

    # Third Party Apps
    'djoser',  # DJOSER
    'rest_framework',  # REST FRAMEWORK
    'corsheaders',  # CORS
    "django_celery_results",  # Celery Results for Django Admin

    # Manage Apps
    'account_service',
    'product_service',
    'order_service',
]

CORS_ALLOW_ALL_ORIGINS = False
CORS_ALLOWED_ORIGINS = [
    'http://localhost:3030',
    'http://localhost:5173'
]


MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'corsheaders.middleware.CorsMiddleware',  # CORS
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'flexi_cart.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'flexi_cart.wsgi.application'


SITE_NAME = getenv('SITE_NAME', 'FlexiCart')

DOMAIN = 'localhost:5173'


# Email Settings
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = getenv('EMAIL_HOST', 'smtp.gmail.com')
EMAIL_PORT = getenv('EMAIL_PORT', 587)
EMAIL_HOST_USER = getenv('EMAIL_HOST_USER', '')
EMAIL_HOST_PASSWORD = getenv('EMAIL_HOST_PASSWORD', '')
EMAIL_USE_TLS = True


# CACHE Settings
CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": f"redis://127.0.0.1:6379/1",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        },
    }
}

# Celery Settings
CELERY_BROKER_URL = getenv('CELERY_BROKER_URL', 'redis://localhost:6379')
CELERY_RESULT_BACKEND = getenv(
    'CELERY_RESULT_BACKEND', 'redis://localhost:6379')
CELERY_ACCEPT_CONTENT = ['application/json']
CELERY_RESULT_SERIALIZER = 'json'
CELERY_TASK_SERIALIZER = 'json'
CELERY_BROKER_CONNECTION_RETRY_ON_STARTUP = True


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

if DEVELOPMENT_MODE is True:
    # Postgres Database
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': getenv('DB_NAME', 'flexi_cart'),
            'USER': getenv('DB_USER', 'postgres'),
            'PASSWORD': getenv('DB_PASSWORD', 'postgres'),
            'HOST': getenv('DB_HOST', 'localhost'),
            'PORT': getenv('DB_PORT', '5432'),
        }
    }
elif len(sys.argv) > 0 and sys.argv[1] == 'collectstatic':
    if getenv('DATABASE_URL', None) is None:
        raise Exception('DATABASE_URL not set')
    # DATABASES = {
    #     'default': dj_database_url.config(default=getenv('DATABASE_URL'))
    # }

# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

AUTH_USER_MODEL = 'account_service.UserAccount'

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = '/static/'  # STATIC FILES URL

MEDIA_URL = '/media/'  # MEDIA FILES URL
MEDIA_ROOT = path.join(BASE_DIR, "media")  # MEDIA FILES ROOT


# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ],
}

SIMPLE_JWT = {
    'AUTH_HEADER_TYPES': ('JWT',),
    'USER_ID_FIELD': 'username',
    'USER_ID_FIELD_CLAIM': 'username',
    "ACCESS_TOKEN_LIFETIME": timedelta(days=1),
    "REFRESH_TOKEN_LIFETIME": timedelta(weeks=1),
}


DJOSER = {
    'USER_ID_FIELD': 'username',
    'LOGIN_FIELD': 'email',
    'SEND_ACTIVATION_EMAIL': True,
    'SEND_CONFIRMATION_EMAIL': True,
    'PASSWORD_CHANGED_EMAIL_CONFIRMATION': True,
    'USERNAME_CHANGED_EMAIL_CONFIRMATION': True,
    'ACTIVATION_URL': 'auth/activate/{uid}/{token}',
    'PASSWORD_RESET_CONFIRM_URL': 'auth/reset_password_confirm/{uid}/{token}',
    'USERNAME_RESET_CONFIRM_URL': 'auth/reset_username_confirm/{uid}/{token}',
    'USER_CREATE_PASSWORD_RETYPE': True,
    'PASSWORD_RESET_CONFIRM_RETYPE': True,
    'SERIALIZERS': {
        'user_create': 'account_service.serializers.UserAccountCreateSerializer',
        'user': 'account_service.serializers.UserAccountSerializer',
    },
    'PERMISSIONS': {
        'user': ['rest_framework.permissions.AllowAny'],
        'user_create': ['rest_framework.permissions.AllowAny'],
        'activation': ['rest_framework.permissions.AllowAny'],
        'user_list': ['rest_framework.permissions.AllowAny'],
    },

}
