from rest_framework import routers
from .api import UsersViewSet, ExplorerViewSet, CommentViewSet

router = routers.DefaultRouter()
router.register('api/users', UsersViewSet, 'users')
router.register('api/explorer', ExplorerViewSet, 'explorer')
router.register('api/comment', CommentViewSet, 'comment')

urlpatterns = router.urls
