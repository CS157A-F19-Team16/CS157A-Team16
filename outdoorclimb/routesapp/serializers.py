from rest_framework import serializers
from routesapp.models import Parks, Rocks, Routes, Boulder_Routes, Sport_Routes, Traditional_Routes, Pictures_of_Routes, Pitches, Post


class ParksSerializer(serializers.ModelSerializer):  # Create serialzer
    class Meta:
        model = Parks
        fields = '__all__'


class RocksSerializer(serializers.ModelSerializer):  # Create serialzer
    class Meta:
        model = Rocks
        fields = '__all__'


class RoutesSerializer(serializers.ModelSerializer):  # Create serialzer
    class Meta:
        model = Routes
        fields = '__all__'


class Boulder_RoutesSerializer(serializers.ModelSerializer):  # Create serialzer
    class Meta:
        model = Boulder_Routes
        fields = '__all__'


class Sport_RoutesSerializer(serializers.ModelSerializer):  # Create serialzer
    class Meta:
        model = Sport_Routes
        fields = '__all__'


# Create serialzer
class Traditional_RoutesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Traditional_Routes
        fields = '__all__'


# Create serialzer
class Pictures_of_RoutesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pictures_of_Routes
        fields = '__all__'


class PitchesSerializer(serializers.ModelSerializer):  # Create serialzer
    class Meta:
        model = Pitches
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
