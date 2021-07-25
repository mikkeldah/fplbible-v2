from django.db import models
from django.db.models.fields.related import ForeignKey

# Create your models here.

#Player model
class Player(models.Model):
    id = models.IntegerField(primary_key=True)
    full_name = models.CharField(max_length=100, default=" ")
    web_name = models.CharField(max_length=100, default=" ")
    position = models.CharField(max_length=100, default=" ")
    team = models.CharField(max_length=100, default=" ")
    short_name = models.CharField(max_length=100, default=" ")
    price = models.FloatField(default=1)
    total_points = models.IntegerField(default=1)
    minutes = models.IntegerField(default=1)
    points_per_price = models.FloatField(default=0)
    points_per_minute = models.FloatField(default=0)
    points_per_game = models.FloatField(default=0)
    points_per_price_per_minute = models.FloatField(default=0)
    points_per_price_per_game = models.FloatField(default=0)
    status = models.CharField(max_length=100, default=" ")
    takes_corners = models.BooleanField(default=False)
    takes_freekicks = models.BooleanField(default=False)
    takes_penalties = models.BooleanField(default=False)
    form = models.FloatField(default=1)
    ict_index = models.FloatField(default=1)

    #... the list goes on


    def __str__(self):
        return self.web_name   

class Fixture(models.Model):
    gameweek = models.IntegerField(default=0)
    finished = models.BooleanField(default=False)
    name_h = models.CharField(max_length=100, default=" ")
    short_name_h = models.CharField(max_length=100, default=" ")
    team_h_difficulty = models.IntegerField(default=0)
    name_a = models.CharField(max_length=100, default=" ")
    short_name_a = models.CharField(max_length=100, default=" ")
    team_a_difficulty = models.IntegerField(default=0)
    
