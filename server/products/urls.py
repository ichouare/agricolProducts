from django.urls import path, include
from  . import views 

urlpatterns = [
     path('', views.get_products, name='get_products'),
     path('note/<int:id>', views.note_products, name='note_products'),
]