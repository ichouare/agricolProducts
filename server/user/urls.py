from django.urls import path, include
from  . import views 

urlpatterns = [
     path('register/', views.sign_up, name='register'),
     path('login/', views.login, name='login'),
]