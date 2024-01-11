from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin, AbstractBaseUser


class UserManager(BaseUserManager):
    def create_user(self, email, username, first_name, last_name, password=None, **extra_fields):
        """Creates and saves a new user"""
        if not email:
            raise ValueError('Users must have an email address')

        if not username:
            raise ValueError('Users must have a username')

        email = self.normalize_email(email)
        email = email.lower()

        user = self.model(email=email, username=username,
                          first_name=first_name, last_name=last_name, **extra_fields)

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password, username, first_name, last_name, **extra_fields):
        """Creates and saves a new superuser"""
        user = self.create_user(email, password=password, username=username,
                                first_name=first_name, last_name=last_name, ** extra_fields)

        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user


class User(AbstractUser, PermissionsMixin):
    """Custom user model that supports using email instead of username"""

    email = models.EmailField(max_length=255, unique=True)
    username = models.CharField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255, blank=True)
    last_name = models.CharField(max_length=255, blank=True)
    is_staff = models.BooleanField(default=False)

    # UserManager() is used to manage the user model
    objects = UserManager()

    # USERNAME_FIELD is used to identify the user
    USERNAME_FIELD = 'email'

    # REQUIRED_FIELDS is used to require other fields
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    def __str__(self):
        return self.email
