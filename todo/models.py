from django.db import models

from users.models import CustomUser


class Project(models.Model):
    name = models.CharField(max_length=256)
    repo = models.URLField()
    users = models.ManyToManyField(CustomUser)

    def __str__(self):
        return self.name

class TODO(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    todo_text = models.TextField()
    created_at = models.DateTimeField(auto_created=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.todo_text} (project: {self.project.name})"

    def delete(self, using=None, keep_parents=False):
        current = self.is_active = False
        return current