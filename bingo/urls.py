from django.urls import path
from . import views

urlpatterns = [
    path('<slug:mode>/category', views.category, name='category'),
    path('player/<slug:category>', views.player, name='player'),
    path('manager/<slug:category>', views.manager, name='manager'),
    path('manager/<slug:category>/index', views.index, name='index'),
    path('', views.top, name='top'),
]
