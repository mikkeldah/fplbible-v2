from django.apps import AppConfig


class AppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'app'

    def ready(self):
        print("Starting scheduler...")
        from .data_scheduler import data_updater
        data_updater.start()
