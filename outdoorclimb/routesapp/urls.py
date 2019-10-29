from rest_framework import routers
from .api import ParksViewSet, RocksViewSet, RoutesViewSet, Boulder_RoutesViewSet, Sport_RoutesViewSet, Traditional_RoutesViewSet, Pictures_of_RoutesViewSet, PitchesViewSet


router = routers.DefaultRouter()
router.register('api/parks', ParksViewSet, 'parks')
router.register('api/rocks', RocksViewSet, 'rocks')
router.register('api/routes', RoutesViewSet, 'routes')
router.register('api/boulder_routes', Boulder_RoutesViewSet, 'boulder_routes')
router.register('api/sport_routes', Sport_RoutesViewSet, 'sport_routes')
router.register('api/traditional_routes',
                Traditional_RoutesViewSet, 'traditional_routes')
router.register('api/pictures_of_routes',
                Pictures_of_RoutesViewSet, 'pictures_of_routes')
router.register('api/pitches', PitchesViewSet, 'pitches')

urlpatterns = router.urls
