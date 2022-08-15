from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Category
from .serializers import CategorySerializer, CategoryDetailSerializer

from django.shortcuts import get_object_or_404
# from rest_framework.permissions import IsAuthenticated



# Create your views here.
class CategoryView(APIView):
    
    def get(self, request):
        all_cat = Category.objects.all()
        serializer = CategorySerializer(all_cat, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(raise_exception=True)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CategoryDetailView(APIView):
        
        def get_object(self, pk):
            return get_object_or_404(Category, pk=pk)
    
        def get(self, request, pk):
            cat = self.get_object(pk)
            serializer = CategoryDetailSerializer(cat)
            return Response(serializer.data, status=status.HTTP_200_OK)
    
        def put(self, request, pk):
            cat = self.get_object(pk)
            serializer = CategoryDetailSerializer(cat, data=request.data, partial=False)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
        def delete(self, request, pk):
            cat = self.get_object(pk)
            cat.delete()
            return Response(status=status.HTTP_200_OK)