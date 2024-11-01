from django.shortcuts import render
from .serializers import productsSerializer
# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes,authentication_classes
from rest_framework import status
from .models import products
from rest_framework.permissions import IsAuthenticated, AllowAny




@api_view(['GET'])
def get_products(request):

    if request.method == 'GET':
        try:
            print("user", request.user)
            Products = products.objects.all()
            serializer = productsSerializer(Products, many=True)
            user_id = request.user.id
            print("user", user_id)
            for product in serializer.data:
                if user_id in product['user']:
                    product['user'].clear()
                    product['user'].append(user_id)
        
                else:
                    product['user'].clear()
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except products.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['PUT'])
# @permission_classes([AllowAny]) 
# @authentication_classes([])
def note_products(request, id):
    user_id = request.user.id
    print("user_id----------->", user_id)
    if request.method == 'PUT':
        try:
            product = products.objects.get(pk=id)
            product.note +=1
            if product is not None:
                if product.note > 10:
                    product.chosestatus = 'great' 
                else:
                    product.chosestatus = 'not_great'
                product.user.add(user_id)
                product.save()
                serializer = productsSerializer(product)
                return Response(serializer.data, status=status.HTTP_200_OK)
        except products.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)