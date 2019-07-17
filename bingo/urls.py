from django.urls import path
from . import views

urlpatterns = [
    path('category/player', views.category, name='category'),
    path('category/manager', views.category, name='category'),
    path('', views.top, name='top'),
]
