from rest_framework.serializers import ModelSerializer

from users.serializers import CustomUserModelSerializer
from .models import Project, TODO


class ProjectSerializer(ModelSerializer):
    users = CustomUserModelSerializer(many=True)

    class Meta:
        model = Project
        fields = [
            'name',
            'repo',
            'users',
        ]


class TODOSerializer(ModelSerializer):
    project = ProjectSerializer()
    users = CustomUserModelSerializer()

    class Meta:
        model = TODO
        fields = [
            'project',
            'todo_text',
            'created_at',
            'updated_at',
            'is_active',
            'author',
            'users',
        ]