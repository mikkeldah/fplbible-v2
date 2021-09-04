from django.shortcuts import render
from .models import Player, Fixture, Gameweek
from .serializers import PlayerSerializer, FixtureSerializer, GameweekSerializer
from django.views.generic import TemplateView

from rest_framework import generics


def main_view(request):
    return TemplateView.as_view(template_name='index.html')(request)

# Create your views here.
class PlayerCreate(generics.ListCreateAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

class FixtureCreate(generics.ListCreateAPIView):
    queryset = Fixture.objects.all()
    serializer_class = FixtureSerializer

class GameweekCreate(generics.ListCreateAPIView):
    queryset = Gameweek.objects.all()
    serializer_class = GameweekSerializer