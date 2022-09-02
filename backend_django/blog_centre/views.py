from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend


from .models import Post
from .serializers import PostsSerializer


# Create your views here.
class PostModelViewSet(ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Post.objects.all()
    serializer_class = PostsSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['categories__slug']


