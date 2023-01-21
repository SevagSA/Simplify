from django.urls import path
from .views import login_member, is_first_login

urlpatterns = [
    path('login/', login_member),
    path('is_first_login/', is_first_login),
]