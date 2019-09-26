from rest_framework import serializers
from outdoorsclimb.models import OutdoorClimb

# OutdoorsClimb Serializer
class OutdoorsClimbSerializer(serializers.ModelSerializer): #Create serialzer
    class Meta:
        model = OutdoorClimb
        fields = '__all__'

        