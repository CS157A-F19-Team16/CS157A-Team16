from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True, primary_key=True)
    created_at = models.DateTimeField(
        auto_now_add=True)  # Add date automatically


class Explorer(models.Model):
    email = models.EmailField(max_length=100, unique=True, primary_key=True)
    address = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=100)


class Comment(models.Model):
    author_email = models.EmailField(max_length=100)
    route_id = models.CharField(max_length=64)
    date_posted = models.DateTimeField(auto_now_add=True)
    text = models.TextField(max_length=5000)

    class Meta:
        unique_together = ['route_id', 'author_email', 'date_posted']
