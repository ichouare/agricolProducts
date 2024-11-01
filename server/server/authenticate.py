from rest_framework_simplejwt.authentication import JWTAuthentication
from django.conf import settings
from rest_framework.exceptions import AuthenticationFailed


class CustomJWTAuthentication(JWTAuthentication):
    """Custom authentication class"""
    def authenticate(self, request):
        header = self.get_header(request)
        
        if header is None:
            raw_token = request.COOKIES.get('access') or None
        else:
            raw_token = self.get_raw_token(header)
        if raw_token is None:
            return None
        print("raw_token: %s" % raw_token)
        try:
            validated_token = self.get_validated_token(raw_token)
            return self.get_user(validated_token), validated_token
        except AuthenticationFailed as e:
            print("Authentication failed:", e)
            raise AuthenticationFailed("Token is invalid or expired")