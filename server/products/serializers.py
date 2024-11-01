from rest_framework import serializers
from .models import products
from user.models import User


class UserIdSerilizer(serializers.ModelSerializer):
    class Meta:
        model : User
        fields : ['id']

class productsSerializer(serializers.ModelSerializer):
    user = UserIdSerilizer
    class Meta:
        model = products
        fields = '__all__'