from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination import LimitOffsetPagination

from rest_framework.viewsets import ModelViewSet

from .models import Project, TODO
from .serializers import ProjectSerializer, TODOSerializer


class ProjectsLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class ToDoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20

class ProjectsViewSet(ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()
    pagination_class = ProjectsLimitOffsetPagination
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['name']

class ToDoViewSet(ModelViewSet):
    serializer_class = TODOSerializer
    queryset = TODO.objects.all()
    pagination_class = ToDoLimitOffsetPagination
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['todo_text', 'is_active']
