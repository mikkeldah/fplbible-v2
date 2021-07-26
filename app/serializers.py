from rest_framework import serializers
from .models import Gameweek, Player
from .models import Fixture

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ('id', 'full_name', 'web_name', 'position', 'team', 'short_name', 'price', 'total_points', 'minutes', 
                'points_per_minute', 'points_per_price', 'points_per_game', 'points_per_price_per_minute', 'points_per_price_per_game',
                'status', 'takes_corners', 'takes_freekicks', 'takes_penalties', 'form','ict_index')

class FixtureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fixture
        fields = ('gameweek', 'finished', 'name_h', 'short_name_h', 'team_h_difficulty', 'name_a', 'short_name_a', 'team_a_difficulty')
    
class GameweekSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gameweek
        fields = ('id', 'deadline_time', 'finished', 'data_checked', 'is_previous', 'is_current', 'is_next')
