from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import UserRegisterSerializer, UserInfoSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from .models import User



# Create your views here.
class RegisterUser(APIView):

    # api/auth/register
    
    def post(self, request):
        serializer = UserRegisterSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserInfoSerializer
        user_serialized = serializer(request.user)
        return Response(user_serialized.data, status=status.HTTP_200_OK)
    
    def put(self, request):
        serializer = UserInfoSerializer(request.user, data=request.data, partial=False)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request):
        serializer = UserInfoSerializer(request.user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request):
        serializer = UserInfoSerializer(request.user)
        user = get_object_or_404(User, pk=serializer.data['id'])
        user.delete()
        return Response(status=status.HTTP_200_OK)