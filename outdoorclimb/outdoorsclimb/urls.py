from rest_framework import routers
from .api import OutdoorsClimbViewSet

router = routers.DefaultRouter()
router.register('api/outdoorsclimb', OutdoorsClimbViewSet, 'users')

urlpatterns = router.urls