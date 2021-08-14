from django.core import management
from apscheduler.schedulers.background import BackgroundScheduler

def start():
    scheduler = BackgroundScheduler()

    #Add job to scheduler
    scheduler.add_job(update_db, "interval", minutes=5, id="data_001", replace_existing=True)
    scheduler.start()

def update_db():
    management.call_command('gameweek_data', verbosity=0)
    management.call_command('player_data', verbosity=0)
    management.call_command('fixtures_data', verbosity=0)