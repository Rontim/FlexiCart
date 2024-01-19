
from flexi_cart import utils
from rest_framework import serializers, exceptions
from .models import User
from django.contrib.auth.password_validation import validate_password
from django.core import exceptions as django_exceptions
from rest_framework.exceptions import ValidationError


class UserCreateSerializer(serializers.ModelSerializer):
    """Serializer for creating users"""

    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True, 'min_length': 8}}

    def create(self, validated_data):
        """Create a new user with encrypted password and return it"""
        return User.objects.create_user(**validated_data)  # type: ignore


class UserSerializer(serializers.ModelSerializer):
    """Serializer for the users object"""

    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'first_name', 'last_name')
        read_only_fields = ('id', 'email', 'username')
