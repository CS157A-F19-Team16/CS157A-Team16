from rest_framework import routers
from .api import UsersViewSet, ExplorerViewSet, CommentViewSet
from .views import register_explorer
from django.urls import path

router = routers.DefaultRouter()
router.register('api/users', UsersViewSet, 'users')
router.register('api/explorer', ExplorerViewSet, 'explorer')
router.register('api/comment', CommentViewSet, 'comment')

urlpatterns = [
    path("users/explorerRegister/",
         register_explorer, name="register_explorer"),
]
urlpatterns += router.urls
