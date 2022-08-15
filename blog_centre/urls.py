from django.urls import path, include
from . import views
from .routers import post_router
from user.views import RegisterUser, UserView

urlpatterns = [
    path('blog/', include(post_router.urls)),
    path('auth/', include('user.api.urls')),
    path('categories', include('categories.urls')),
    path('auth/register', RegisterUser.as_view(), name="register_user"),
    path('auth/me', UserView.as_view(), name="me")
]