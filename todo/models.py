from django.db import models

from users.models import CustomUser


class Project(models.Model):
    name = models.CharField(max_length=256)
    repo = models.URLField()
    users = models.ManyToManyField(CustomUser)


class TODO(models.Model):
    project = models.OneToOneField(Project, on_delete=models.CASCADE)
    todo_text = models.TextField()
    created_at = models.DateTimeField(auto_created=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)