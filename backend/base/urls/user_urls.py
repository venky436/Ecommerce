from django.urls import path
from base.views.users_views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)


urlpatterns=[

    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', get_User_Profile,name="profile"),
    path('profile/update/', Update_User_Profile,name="profile-update"),

    path('register/', User_Register,name="register"),
]