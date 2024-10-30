from django.shortcuts import render
from .serializers import productsSerializer
# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import products



@api_view(['GET'])
def get_products(request):

    if request.method == 'GET':
        try:
            Products = products.objects.all()
            serializer = productsSerializer(Products, many=True)
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except products.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['PUT'])
def note_products(request, id):
    if request.method == 'PUT':
        try:
            product = products.objects.get(pk=id)
            product.note +=1
            if product.note > 10:
                product.chosestatus = 'great' 
            else:
                product.chosestatus = 'not_great'
            product.save()
            serializer = productsSerializer(product)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except products.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)