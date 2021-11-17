from django.urls import path
from base.views.products_views import *

urlpatterns=[
    path('',getProducts,name="products"),
    path('<str:pk>/',get_Product,name="product"),

]