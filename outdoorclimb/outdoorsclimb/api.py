from outdoorsclimb.models import OutdoorClimb
from rest_framework import viewsets, permissions
from .serializers import OutdoorsClimbSerializer

# OutdoorsClimb View set
class OutdoorsClimbViewSet(viewsets.ModelViewSet):
    queryset = OutdoorClimb.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = OutdoorsClimbSerializer