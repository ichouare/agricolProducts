from django.urls import path, include
from  . import views 
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
     path('register/', views.sign_up, name='register'),
     path('login/', views.login, name='login'),
     path('check_session/', views.check_Session, name='check_Session'),
    
     
]