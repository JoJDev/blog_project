from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Category
from .serializers import CategorySerializer, CategoryDetailSerializer
from .permissions import isAdminOrReadOnly

from django.shortcuts import get_object_or_404
# from rest_framework.permissions import IsAuthenticated


class CategoryView(APIView):
    permission_classes = [isAdminOrReadOnly]
    
    def get(self, request):
        all_cat = Category.objects.filter(published=True)
        serializer = CategorySerializer(all_cat, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CategoryDetailView(APIView):
        permission_classes = [isAdminOrReadOnly]

        def get_object(self, slug):
            return get_object_or_404(Category, slug=slug)
    
        def get(self, request, slug):
            cat = self.get_object(slug)
            serializer = CategoryDetailSerializer(cat)
            return Response(serializer.data, status=status.HTTP_200_OK)
    
        def put(self, request, slug):
            cat = self.get_object(slug)
            serializer = CategoryDetailSerializer(cat, data=request.data, partial=False)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        def patch(self, request, slug):
            cat = self.get_object(slug)
            serializer = CategoryDetailSerializer(cat, data=request.data, partial=True)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
        def delete(self, request, slug):
            cat = self.get_object(slug)
            cat.delete()
            return Response(status=status.HTTP_200_OK)