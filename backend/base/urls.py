import imp
from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', views.getRecipes, name="Recipes"),
    path('recipe', views.getRecipes, name="Recipes"),
    path('recipe/<str:pk>', views.getRecipe, name="Recipe"),
]
