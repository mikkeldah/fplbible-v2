from django.core.management.base import BaseCommand, CommandError
import requests
import pandas as pd
from ...models import Fixture, Player


class Command(BaseCommand):

    def handle(self, *args, **options):
        fixtures_url = 'https://fantasy.premierleague.com/api/fixtures/'
        teams_url = 'https://fantasy.premierleague.com/api/bootstrap-static/'

        response_fixtures = requests.get(fixtures_url)
        response_teams = requests.get(teams_url)

        try:
            response_fixtures.raise_for_status()
            response_teams.raise_for_status()
        except:
            print("Could not fetch from FPL API")

        fix_json = response_fixtures.json()
        teams_json = response_teams.json()

        fixtures_df = pd.DataFrame(fix_json)
        fixtures_df = fixtures_df[["event", "finished", "team_a", "team_h", "team_a_difficulty", "team_h_difficulty"]]
        teams_df = pd.DataFrame(teams_json['teams'])
        teams_df = teams_df[['id', 'name', 'short_name']]

        fixtures_df = pd.merge(fixtures_df, teams_df, how="left", left_on="team_a", right_on="id")

        fixtures_df.rename(columns={'name': 'name_a', 'short_name': 'short_name_a'}, inplace=True)

        fixtures_df = pd.merge(fixtures_df, teams_df, how="left", left_on="team_h", right_on="id")

        fixtures_df.rename(columns={'name': 'name_h', 'short_name': 'short_name_h', 'event': 'gameweek'}, inplace=True)

        print(fixtures_df.head(10))

        fixtures_df = fixtures_df[["gameweek", "finished", "name_h", "short_name_h", "team_h_difficulty", "name_a", "short_name_a", "team_a_difficulty"]]

        print(fixtures_df.head(10))
        print(teams_df.head(10))

        for index, row in fixtures_df.iterrows():

            fixture = Fixture(
                gameweek = row['gameweek'],
                finished = row['finished'],
                name_h = row['name_h'],
                short_name_h = row['short_name_h'],
                team_h_difficulty = row['team_h_difficulty'],
                name_a = row['name_a'],
                short_name_a = row['short_name_a'],
                team_a_difficulty = row['team_a_difficulty']
            )
            fixture.save()



