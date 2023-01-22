from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login
from rest_framework.response import Response
from member.models import Member
from django.conf import settings


@api_view(['POST'])
def login_member(request):
    email = request.data.get('email')
    password = request.data.get('password')
    is_logged_in = False
    member = Member.objects.get(email=settings.MEMBER_EMAIL)
    if email == member.email and password == member.password:
        if member.is_first_login:
            member.is_first_login = False
            member.save()
            is_logged_in = True
    return Response({'loggedIn': is_logged_in})


@api_view(['GET'])
def is_first_login(request):
    return Response({'isFirstLogin': Member.objects.get(email=settings.MEMBER_EMAIL).is_first_login})