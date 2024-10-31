from rest_framework import serializers
from .models import User

class RegisterUserSerialzer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data):
        print("validated_data:------------>", validated_data)
        user = User.objects.create_user(
            email = validated_data['email'],
            password = validated_data['password'],
            username = validated_data['username'],
        )
        user.save()
        return user


class UserSerializer(serializers.Serializer):
    class Meta:
       Model = User
       field = '__all__'