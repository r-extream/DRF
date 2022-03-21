from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet

from TODO.models import Project, TODO
from TODO.serializers import ProjectSerializer, TODOSerializer


class ProjectsViewSet(ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()


class ToDoViewSet(ModelViewSet):
    serializer_class = TODOSerializer
    queryset = TODO.objects.all()
