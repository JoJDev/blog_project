from rest_framework.routers import DefaultRouter
from .views import PostModelViewSet

post_router = DefaultRouter()

post_router.register(prefix="posts", basename="posts", viewset=PostModelViewSet)