from pickle import GET
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
#from .recipes import recipes
from .models import Recipe
from .serializer import RecipeSerializer
# Create your views here.

# Get all the recipe
@api_view(["GET"])
def getRecipes(request):
    recipes = Recipe.objects.all()
    serializer = RecipeSerializer(recipes, many=True)
    return Response(serializer.data)

# Get a single recipe
@api_view(['GET'])
def getRecipe(request, pk):
    recipe = Recipe.objects.get(_id=pk)
    serializer = RecipeSerializer(recipe, many=False)
    return Response(serializer.data)