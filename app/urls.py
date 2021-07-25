from django.urls import path
from . import views

urlpatterns = (
    path('app/players', views.PlayerCreate.as_view()),
    path('app/fixtures', views.FixtureCreate.as_view()),
)