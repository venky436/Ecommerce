
from rest_framework.response import Response
from rest_framework.decorators import api_view


from base.models import *

from base.serializer import UserSerializer,UserSerilizerWithToken

from django.contrib.auth.hashers import make_password


# Create your views here.
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAdminUser,IsAuthenticated



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self,*args):
        data = super().validate(*args)
        serializer = UserSerilizerWithToken(self.user).data
    
        for k,x in serializer.items():
            data[k]=x
         
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def Update_User_Profile(request): 
    user = request.user
    serializer = UserSerilizerWithToken(user,many=False)

    dat = request.data

    user.username = dat['username']
    user.email = dat['email']
    user.name = dat['name']
    

    if dat['password'] != '':
        user.password = make_password(dat['password'])
    user.save()
    
    return Response(serializer.data)




@api_view(["GET"])
def get_User_Profile(request): 
    user = request.user
    serializer = UserSerializer(user,many=False)

    return Response(serializer.data)

@api_view(['POST'])
def User_Register(request):

    data = request.data
  
    user = User.objects.create(
        #first_name = data['name'],
        username = data['username'],
        email = data['email'],
        password = make_password(data['password'])
      
    )
    user.is_staff = True
    serializer = UserSerilizerWithToken(user,many=False)

    return Response(serializer.data)

