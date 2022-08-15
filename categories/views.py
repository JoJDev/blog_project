from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Category
from .serializers import CategorySerializer

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
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)