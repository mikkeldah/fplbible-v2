from django.db import models
from django.db.models.fields.related import ForeignKey

# Create your models here.

#Player model
class Player(models.Model):
    id = models.IntegerField(primary_key=True)
    full_name = models.CharField(max_length=100, null=True)
    web_name = models.CharField(max_length=100, null=True)
    position = models.CharField(max_length=100, null=True)
    team = models.CharField(max_length=100, null=True)
    short_name = models.CharField(max_length=100, null=True)
    price = models.FloatField(null=True)
    total_points = models.IntegerField(null=True)
    minutes = models.IntegerField(null=True)
    points_per_price = models.FloatField(null=True)
    points_per_minute = models.FloatField(null=True)
    points_per_game = models.FloatField(null=True)
    points_per_price_per_minute = models.FloatField(null=True)
    points_per_price_per_game = models.FloatField(null=True)
    status = models.CharField(max_length=100, null=True)
    takes_corners = models.BooleanField(null=True)
    takes_freekicks = models.BooleanField(null=True)
    takes_penalties = models.BooleanField(null=True)
    form = models.FloatField(null=True)
    ict_index = models.FloatField(null=True)

    #... the list goes on


    def __str__(self):
        return self.web_name   

class Fixture(models.Model):
    id = models.IntegerField(primary_key=True)
    gameweek = models.IntegerField(null=True)
    finished = models.BooleanField(null=True)
    name_h = models.CharField(max_length=100, null=True)
    short_name_h = models.CharField(max_length=100, null=True)
    team_h_difficulty = models.IntegerField(null=True)
    name_a = models.CharField(max_length=100, null=True)
    short_name_a = models.CharField(max_length=100, null=True)
    team_a_difficulty = models.IntegerField(null=True)


class Gameweek(models.Model):
    id = models.IntegerField(primary_key=True)
    deadline_time = models.CharField(max_length=100, null=True)
    finished = models.BooleanField(null=True)
    data_checked = models.BooleanField(null=True)
    is_previous = models.BooleanField(null=True)
    is_current = models.BooleanField(null=True)
    is_next = models.BooleanField(null=True)