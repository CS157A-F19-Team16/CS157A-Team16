from rest_framework import routers
from .api import ParksViewSet, RocksViewSet, RoutesViewSet, Boulder_RoutesViewSet, Sport_RoutesViewSet, Traditional_RoutesViewSet, Pictures_of_RoutesViewSet, PitchesViewSet
from .views import routes_park_detail, routes_parks_list, add_park, add_route
from django.urls import path

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

urlpatterns = [
    # router.urls,
    path("routesapp/addPark/", add_park, name="add_park"),
    path("routesapp/parks", routes_parks_list, name="routes_parks_list"),
    path("routesapp/parks/<pk>", routes_park_detail, name="routes_parks_detail"),
    path("routesapp/addRoute/", add_route, name="add_route")
]
