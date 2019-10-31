from routesapp.models import Parks, Rocks, Routes, Boulder_Routes, Sport_Routes, Traditional_Routes, Pictures_of_Routes, Pitches
from rest_framework import viewsets, permissions
from .serializers import ParksSerializer, RocksSerializer, RoutesSerializer, Boulder_RoutesSerializer, Sport_RoutesSerializer, Traditional_RoutesSerializer, Pictures_of_RoutesSerializer, PitchesSerializer


class ParksViewSet(viewsets.ModelViewSet):
    queryset = Parks.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ParksSerializer


class RocksViewSet(viewsets.ModelViewSet):
    queryset = Rocks.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RocksSerializer


class RoutesViewSet(viewsets.ModelViewSet):
    queryset = Routes.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RoutesSerializer


class Boulder_RoutesViewSet(viewsets.ModelViewSet):
    queryset = Boulder_Routes.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = Boulder_RoutesSerializer


class Sport_RoutesViewSet(viewsets.ModelViewSet):
    queryset = Sport_Routes.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = Sport_RoutesSerializer


class Traditional_RoutesViewSet(viewsets.ModelViewSet):
    queryset = Traditional_Routes.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = Traditional_RoutesSerializer


class Pictures_of_RoutesViewSet(viewsets.ModelViewSet):
    queryset = Pictures_of_Routes.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = Pictures_of_RoutesSerializer


class PitchesViewSet(viewsets.ModelViewSet):
    queryset = Pitches.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PitchesSerializer
