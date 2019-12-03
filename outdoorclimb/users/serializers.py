from rest_framework import serializers
from users.models import User, Explorer, Comment

# Users Serializer


class UsersSerializer(serializers.ModelSerializer):  # Create serialzer
    class Meta:
        model = User
        fields = '__all__'


class ExplorerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Explorer
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
