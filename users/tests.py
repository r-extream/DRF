from django.test import TestCase
from rest_framework.test import APIRequestFactory, APIClient
from rest_framework import status

from .models import CustomUser
from .views import CustomUserModelViewSet


class TestCustomUser(TestCase):
    def test_authentication_required(self):
        factory = APIRequestFactory()
        request = factory.get('/api/users/')
        view = CustomUserModelViewSet.as_view({'get': 'list'})
        result = view(request)
        self.assertEqual(result.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_authenticated_user_gets_result(self):
        user = CustomUser.objects.create_user('user', 'user@mail.local', 'Qwerty123456')
        client = APIClient()
        client.login(username='user@mail.local', password='Qwerty123456')
        result = client.get(f'/api/users/{user.id}/')
        self.assertEqual(result.status_code, status.HTTP_200_OK)
        self.assertEqual(result.data['email'], 'user@mail.local')
