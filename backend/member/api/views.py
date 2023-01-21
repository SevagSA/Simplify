from rest_framework.decorators import api_view
from rest_framework.response import Response
from member.models import Member
from django.conf import settings

@api_view(['POST'])
def login_member(request):
    email = request.data.get('email')
    password = request.data.get('password')
    is_logged_in = False
    if email and password:
        member = Member.objects.get(email=settings.MEMBER_EMAIL)
        if email == member.email and password == member.password:
            is_logged_in = True
    return Response({'loggedIn': is_logged_in})
