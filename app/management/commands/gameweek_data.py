from django.core.management.base import BaseCommand, CommandError
import requests
import pandas as pd
from ...models import Gameweek

class Command(BaseCommand):

    def handle(self, *args, **options):
        gameweeks_url = "https://fantasy.premierleague.com/api/bootstrap-static/"

        response_gw = requests.get(gameweeks_url)

        try:
            response_gw.raise_for_status()
        except:
            print("Could not fetch from FPL API")

        gw_json = response_gw.json()

        gw_df = pd.DataFrame(gw_json['events'])

        gw_df = gw_df[['id', 'deadline_time', 'finished', 'data_checked', 'is_previous', 'is_current', 'is_next']]

        for index, row in gw_df.iterrows():

            gw = Gameweek(
                id=row['id'],
                deadline_time=row['deadline_time'],
                finished=row['finished'],
                data_checked=row['data_checked'],
                is_previous=row['is_previous'],
                is_current=row['is_current'],
                is_next=row['is_next']
            )
            gw.save()
