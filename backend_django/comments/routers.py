from rest_framework.routers import DefaultRouter
from .views import CommentModelViewSet

router = DefaultRouter()

router.register(prefix="", basename="comments", viewset=CommentModelViewSet)