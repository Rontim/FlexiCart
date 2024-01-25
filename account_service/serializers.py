from rest_framework import serializers
from .models import UserAccount


class UserAccountCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ['email', 'username', 'first_name', 'last_name', 'password']


class UserAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = '__all__'
