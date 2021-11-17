from django.urls import path
from base.views.orders_views import order_create

urlpatterns = [
    path('add/',order_create,name="order")
   

]
