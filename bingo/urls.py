from django.urls import path
from . import views

urlpatterns = [
    path('category/<slug:mode>', views.category, name='category'),
    path('player/<slug:category>', views.player, name='player'),
    path('<slug:category>/manager', views.manager, name='manager'),
    path('', views.top, name='top'),
]
