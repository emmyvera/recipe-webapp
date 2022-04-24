from pyexpat import model
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Recipe(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    _id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=200, null=True, blank=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    ingredient = models.TextField(null=True, blank=True)
    steps = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    #video = 
    createdAt = models.DateTimeField(auto_now_add=True) 
    ratings = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)

    def __str__(self) -> str:
        return self.name

class Review(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)    
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self) -> str:
        return str(self.name)
