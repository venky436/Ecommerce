from django.db.models import fields
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.serializers import ModelSerializer, Serializer
from .models import Product,ShippingAddress,OrderItem,Order
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken

class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
    
class OrderItemsSerializer(ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'
    
class ShippingAddressSerializer(ModelSerializer):
    class Meta:
        model = ShippingAddress
        fields = '__all__'
    
class OrderSerializer(ModelSerializer):
    orderItems = serializers.SerializerMethodField(read_only=True)
    shippingAddress = serializers.SerializerMethodField(read_only=True)
    user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Order
        fields = '__all__'
    
    def get_orderItems(self,obj):

        orderItems = obj.orderitem_set.all()
        serializer = OrderItemsSerializer(orderItems,many=True)
        return serializer.data
        
    def get_shippingAddress(self,obj):
        try:
            address = ShippingAddressSerializer(obj.ShippingAddress,many=False)
        except :
            address = False

        return address
    
    def get_user(self,obj):
        user = obj.user
        serializer = UserSerializer(user,many=False)
        return serializer.data
    



    
class UserSerializer(ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id','_id','username','email','name','isAdmin',]

    def get_name(self,obj):
        name= obj.first_name
        if name== '':
            name= obj.email

        return name
    def get__id(self,obj):
        _id = obj.id
        return _id
    
    def get_isAdmin(self,obj):
        isAdmin = obj.is_staff
        return isAdmin

class UserSerilizerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id','_id','username','email','name','isAdmin','token']
    def get_token(self,obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)