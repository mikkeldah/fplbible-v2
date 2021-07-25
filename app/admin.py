from django.contrib import admin

# Register your models here.

from . import models

admin.site.register(models.Player)
admin.site.register(models.Fixture)