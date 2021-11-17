from django.shortcuts import render
from rest_framework import permissions, serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import OrderItem,Order,ShippingAddress,Product
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAdminUser,IsAuthenticated
from base.serializer import OrderSerializer

@api_view(['POST'])
@permission_classes([IsAdminUser])
def order_create(request):
    user = request.user

    data = request.data

    #print('DATA:',data)
    
    #cart = data['cart']
    cartItems = data['cartItems']
    paymentMethod = data['paymentMethod']
    shippingDetails = data['shippingDetails']

    #1 Create Order
    order = Order.objects.create(
        user=user,
        paymentMethod =paymentMethod,
        taxPrice = data['taxPrice'],
        shippingPrice = data['shippingPrice'],
        totalPrice = data['totalPrice']

    )
    #2 Create Shipping 
    shipping = ShippingAddress.objects.create(
        order = order,
        address = shippingDetails['address'],
        city = shippingDetails['city'],
        postalCode = shippingDetails['postalCode'],
        country = shippingDetails['country']
    )
    #3 Create OrderItems
    for i in cartItems:
        product = Product.objects.get(_id=i['product'])
        
        orderItems = OrderItem.objects.create(
            product = product,
            order = order,
            name = i['name'],
            quantity = i['qty'],
            price = i['price'],
            image = product.image.url

        )

        product.countInStock -= int(orderItems.quantity)

        product.save()
    
    serializer = OrderSerializer(order,many=False)

    return Response(serializer.data)
    

    
    #4 Update Stock
