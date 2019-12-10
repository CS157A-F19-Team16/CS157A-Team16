from users.models import User, Explorer, Comment
from rest_framework import viewsets, permissions
from .serializers import UsersSerializer, ExplorerSerializer, CommentSerializer

# Users View set


class UsersViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UsersSerializer


class ExplorerViewSet(viewsets.ModelViewSet):
    queryset = Explorer.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ExplorerSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CommentSerializer
