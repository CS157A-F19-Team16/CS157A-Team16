from rest_framework import serializers
from users.models import User

# Users Serializer
class UsersSerializer(serializers.ModelSerializer): #Create serialzer
    class Meta:
        model = User
        fields = '__all__'