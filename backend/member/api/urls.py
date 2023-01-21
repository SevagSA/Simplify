from django.urls import path
from .views import login_member

urlpatterns = [
    path('login/', login_member)
]