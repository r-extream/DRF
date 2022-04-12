from  django.test import TestCase
from mixer.backend.django import mixer
from rest_framework.test import APITestCase

from users.models import CustomUser
from todo.models import Project


class TestProject(APITestCase):
    def test_creating_project(self):
        CustomUser.objects.create_superuser('admin', 'admin@mail.local', 'Qwerty123456')
        project = mixer.blend(Project)
        self.client.login(username='admin@mail.local', password='Qwerty123456')
        result = self.client.get('/api/projects/1/')
        self.assertEqual(result.data['name'], project.name)
