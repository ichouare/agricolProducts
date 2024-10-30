from rest_framework import serializers
from .models import User

class RegisterUserSerialzer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']

    def create(self, clean_data):
        user = User.objects.create_user(
            email = clean_data['email'],
            password = clean_data['password'],
            username = clean_data['username'],
        )
        user.save()
        return user


class UserSerializer(serializers.Serializer):
    class Meta:
       Model = User
       field = '__all__'