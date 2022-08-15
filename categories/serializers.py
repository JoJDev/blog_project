from rest_framework.serializers import ModelSerializer
from .models import Category

class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title', 'published', 'slug']
    
class CategoryDetailSerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title', 'published', 'slug']
        