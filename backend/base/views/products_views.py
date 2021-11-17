from django.http.response import JsonResponse
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import serializers
from rest_framework import permissions
from base.products import products
from rest_framework.response import Response
from rest_framework.decorators import api_view

from base.serializer import ProductSerializer
from base.models import *
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAdminUser,IsAuthenticated

@api_view(["GET"])
def getProducts(request): 
    products = Product.objects.all()
    serializer = ProductSerializer(products,many=True)

    return Response(serializer.data)


@api_view(["GET"])
#@permission_classes([IsAuthenticated])
def get_Product(request,pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product,many=False)

    
    return Response(serializer.data)
