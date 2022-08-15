from rest_framework.serializers import ModelSerializer
from .models import Post


class PostsSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ['title', 'order', 'created_at', 'order']