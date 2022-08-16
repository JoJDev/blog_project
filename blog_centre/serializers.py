from rest_framework.serializers import ModelSerializer, BaseSerializer, SerializerMethodField
from .models import Post
from user.serializers import UserInfoSerializer
from categories.serializers import CategorySerializer


from rest_framework import fields

class CategoryInternalSerializer(ModelSerializer):
    def to_internal_value(self, data):
        return data


class PostsSerializer(ModelSerializer):
    user = UserInfoSerializer(read_only=True)
    categories = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'created_at', 'user', 'categories', 'slug', 'miniature']