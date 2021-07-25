from django.shortcuts import render
from .models import Player
from .models import Fixture
from .serializers import PlayerSerializer
from .serializers import FixtureSerializer

from rest_framework import generics

# Create your views here.
class PlayerCreate(generics.ListCreateAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

class FixtureCreate(generics.ListCreateAPIView):
    queryset = Fixture.objects.all()
    serializer_class = FixtureSerializer