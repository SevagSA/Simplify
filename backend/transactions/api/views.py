import json

from django.db.models import Sum
from transactions.models import Expenses, Card
from member.models import Member
from transactions.api.serializers import ExpensesSerializer, CardSerializer

from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import ExpensesSerializer, CardSerializer

from django.conf import settings


class ExpensesList(generics.ListCreateAPIView):
    queryset = Expenses.objects.all()
    serializer_class = ExpensesSerializer


class ExpensesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Expenses.objects.all()
    serializer_class = ExpensesSerializer


class CardList(generics.ListCreateAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer


class CardDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer


@api_view(['GET'])
def get_all_spendings_for_card(request, card):
    spendings = Expenses.objects.filter(card=card).filter(is_income=False)
    serializer = ExpensesSerializer(spendings,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_all_income_for_card(request, card):
    spendings = Expenses.objects.filter(card=card).filter(is_income=True)
    serializer = ExpensesSerializer(spendings,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_recent_spendings(request, card):
    spendings = Expenses.objects.filter(card=card).filter(is_income=False).order_by('-date_of_expense')[:3]
    serializer = ExpensesSerializer(spendings, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_expenses_for_month(request, card, month, year, is_income):
    expenses = Expenses.objects.filter(card=card).filter(
        is_income=is_income).filter(date_of_expense__year=year).filter(date_of_expense__month=month)
    serializer = ExpensesSerializer(expenses, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_highest_recurring_expense(request, card):
    spendings = Expenses.objects.filter(card=card).filter(is_income=False).exclude(frequency=settings.ONCE).order_by('-amount')[:3]
    serializer = ExpensesSerializer(spendings,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def sum_of_all_cards_for_member(request):
    member = Member.objects.get(email=settings.MEMBER_EMAIL)
    sum_of_cards = Card.objects.filter(member=member).aggregate(Sum('card_balance'))
    return Response(str(sum_of_cards['card_balance__sum']))
