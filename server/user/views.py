from django.shortcuts import render
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes,authentication_classes
from .serializers import RegisterUserSerialzer , UserSerializer
from rest_framework import status
from .models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login as auth_login
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt


# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])   
@authentication_classes([])
def sign_up(request):
    if request.method == 'GET':
           return Response({"message": "Welcome to home"})
    if request.method == 'POST':
        print(request.data)
        serializer =  RegisterUserSerialzer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"data": "user created"}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny]) 
@authentication_classes([])
def login(request):
    if request.method == 'POST':
        try:
            data = request.data
            email = data['email']
            password = data['password']
            response = Response()
            print("data", email, password)
            user = authenticate(request, email=email, password=password)
            # usr = User.objects.get(email=email)
            # print(username, password)
            print(user)
            if user is not None:
                auth_login(request, user)
                refresh  = RefreshToken.for_user(user)
                refresh_token = str(refresh)
                access_token = str(refresh.access_token)
                response = Response({
                    'refresh':  refresh_token,
                    'access': access_token,
                })

                print("refresh========>", refresh_token)

                # Set the cookies
                response.set_cookie(
                key=settings.SIMPLE_JWT["AUTH_COOKIE"],
                value=access_token,
                httponly=True,
                secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"],
                samesite='Lax',
                )
                response.set_cookie(
                    key=settings.SIMPLE_JWT["AUTH_COOKIE_REFRESH"],
                    value=refresh_token,
                    httponly=True,
                    secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"],
                    samesite='Lax',

                )

              
                return response
            else:
                return Response({"detail": "Invalid credentials"}, status=400)
        except Exception as e:
            return Response({"message": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



# @csrf_exempt
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def check_Session(request):
    if request.method == 'GET':
        return Response({"status": status.HTTP_200_OK})