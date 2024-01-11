from django.test import TestCase
from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from user_service.serializers import UserSerializer, UserCreateSerializer

User = get_user_model()


class PublicUserApiTests(TestCase):
    """Test the users API (public)"""

    def setUp(self):
        self.client = APIClient()

    def test_create_valid_user_success(self):
        """Test creating user with valid payload is successful"""
        payload = {
            'email': 'rongitonga@gmail.com',
            'username': 'rongitonga',
            'password': 'testpass',
            'first_name': 'Ron',
            'last_name': 'Gitonga',
            're_password': 'testpass'
        }
        res = self.client.post('/api/users/', payload)

        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        user = User.objects.get(**res.data)
        self.assertTrue(user.check_password(payload['password']))
        self.assertNotIn('password', res.data)

    def test_user_exists(self):
        """Test creating a user that already exists fails"""
        payload = {
            'email': 'rongitonga@gmail.com',
            'username': 'rongitonga',
            'password': 'testpass',
            'first_name': 'Ron',
            'last_name': 'Gitonga',
        }

        User.objects.create_user(**payload)

        res = self.client.post('/api/users/', payload)

        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(res.data['email'][0], 'user with this email already exists.')
        self.assertEqual(res.data['username'][0], 'user with this username already exists.')

    def test_password_too_short(self):
        """Test that the password must be more than 8 characters"""
        payload = {
            'email': 'rongitonga@gmail.com',
            'username': 'rongitonga',
            'password': 'test',
            'first_name': 'Ron',
            'last_name': 'Gitonga',
        }

        res = self.client.post('/api/users/', payload)

        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)

    def test_re_password_mismatch(self):
        """Test that the password and re_password must match"""
        payload = {
            'email': 'rongitonga@gmail.com',
            'username': 'rongitonga',
            'password': 'testpass',
            'first_name': 'Ron',
            'last_name': 'Gitonga',
            're_password': 'testpass2'
        }

        res = self.client.post('/api/users/', payload)

        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)
        print(res.data)
