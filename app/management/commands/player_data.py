from django.core.management.base import BaseCommand, CommandError
import requests
import pandas as pd
from ...models import Player


class Command(BaseCommand):
    
    def handle(self, *args, **options):
    
        url = 'https://fantasy.premierleague.com/api/bootstrap-static/'

        response = requests.get(url)

        try:
            response.raise_for_status()
        except:
            print("Could not fetch from FPL API")
        json = response.json()

        print(json.keys())

        elements_df = pd.DataFrame(json['elements'])
        # events_df = pd.DataFrame(json['events'])
        # gs_df = pd.DataFrame(json['game_settings'])
        # phases_df = pd.DataFrame(json['phases'])
        teams_df = pd.DataFrame(json['teams'])
        # tot_df = pd.DataFrame(json['total_players'])
        # element_stats_df = pd.DataFrame(json['element_stats'])
        # element_types_df = pd.DataFrame(json['element_types'])

        # print(elements_df.head())
        # print(elements_df.columns)

        # IMPORTANT: shows GW Deadline and finished time
        # print(events_df[['name', 'deadline_time', 'finished', 'data_checked','deadline_time_epoch', 'deadline_time_game_offset']].head(30))
        # print(events_df.columns)

        # print(gs_df.head())
        # print(gs_df.columns)

        # print(phases_df.to_string())
        # print(phases_df.columns)

        print(teams_df.head())

        # print(tot_df.head())
        # print(tot_df.columns)

        # print(element_stats_df.head())
        # print(element_stats_df.columns)

        # print(element_types_df.head())
        # print(element_types_df.columns)

        elements_df = elements_df[elements_df['minutes'] > 0]
        teams_df = teams_df.rename(columns={'code': 'team_code'})

        elements_df = pd.merge(elements_df, teams_df, on="team_code")

        print(elements_df.columns)
        
        elements_df['full_name'] = elements_df['first_name']+" "+elements_df['second_name']
        elements_df['price'] = elements_df['now_cost'] / 10
        elements_df['points_per_minute'] = elements_df['total_points'] / elements_df['minutes']
        elements_df['points_per_price'] = elements_df['total_points'] / elements_df['price']
        elements_df['points_per_price_per_minute'] = elements_df['total_points'] / elements_df['price'] / elements_df['minutes']
        elements_df['points_per_game'] = elements_df['points_per_game'].map(lambda x: float(x))
        elements_df['points_per_price_per_game'] = elements_df['points_per_game'] / elements_df['price']
        elements_df['position'] = elements_df['element_type'].map(
            {1: 'GKP', 2: 'DEF', 3: 'MID', 4: 'FWD'}
        )

        elements_df['status'] = elements_df['status'].map({'a': 'Available', 'u': 'Unavailable', 'i':'Insecure'})

        elements_df['takes_corners'] = elements_df['corners_and_indirect_freekicks_order'].map(lambda x: True if x == 1.0 else False)
        elements_df['takes_freekicks'] = elements_df['direct_freekicks_order'].map(lambda x: True if x == 1.0 else False)
        elements_df['takes_penalties'] = elements_df['penalties_order'].map(lambda x: True if x == 1.0 else False)
        
        print(elements_df['short_name'])

        players_df = elements_df[['id_x', 'full_name', 'web_name', 'position', 'name', 'short_name', 'price', 'total_points', 'minutes',
        'points_per_minute', 'points_per_price', 'points_per_game', 'points_per_price_per_minute', 'points_per_price_per_game','status', 'takes_corners', 'takes_freekicks', 'takes_penalties', 'form_x','ict_index']]
        players_df = players_df.rename(columns={'id_x': 'id', 'name': 'team', 'form_x': 'form'})

        players_df.fillna(0, inplace=True)

        for index, row in players_df.iterrows():
            id = row['id']
            full_name = row['full_name']
            web_name = row['web_name']
            position = row['position']
            team = row['team']
            short_name = row['short_name']
            price = row['price']
            total_points = row['total_points']
            minutes = row['minutes']
            ppm = row['points_per_minute']
            ppp = row['points_per_price']
            ppg = row['points_per_game']
            ppppm = row['points_per_price_per_minute']
            ppppg = row['points_per_price_per_game']
            status = row['status']
            takes_corners = row['takes_corners']
            takes_freekicks = row['takes_freekicks']
            takes_penalties = row['takes_penalties']
            form = row['form']
            ict_index = row['ict_index']

            player = Player(id=id, full_name=full_name, web_name=web_name, position=position, team=team, short_name=short_name,price=price, total_points=total_points, minutes=minutes,
            points_per_price=ppp, points_per_minute=ppm, points_per_game=ppg, points_per_price_per_minute=ppppm, points_per_price_per_game=ppppg, status=status,
            takes_corners=takes_corners, takes_freekicks=takes_freekicks, takes_penalties=takes_penalties, form=form, ict_index=ict_index)

            player.save()
    
