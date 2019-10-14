from users.models import User
from rest_framework import viewsets, permissions
from .serializers import UsersSerializer

# Users View set
class UsersViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UsersSerializer
