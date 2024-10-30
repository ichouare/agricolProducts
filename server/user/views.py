from django.shortcuts import render
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .serializers import RegisterUserSerialzer , UserSerializer
from rest_framework import status

# Create your views here.

@api_view(['GET', 'POST'])
def sign_up(request):
    if request.method == 'GET':
           return Response({"message": "Welcome to home"})
    if request.method == 'POST':
        print(request.data)
        serializer =  RegisterUserSerialzer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        else:
             return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    print(request.data)
    if  request.method == 'POST':
        data = request.data
        try:
            user = authenticate(**data)
            if user:
                login(request, user)
                return JsonResponse({"message": "is logged in"}, status=status.HTTP_200_OK)
            else:
                return JsonResponse({"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            return Response({"message": "is logged in"}, status=status.HTTP_201_CREATED)