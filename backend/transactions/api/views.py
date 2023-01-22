import json
import openai
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


@api_view(['GET'])
def open_ai_view(request, source):
    try:
        expense = Expenses.objects.get(source__iexact=source)
    except Expenses.DoesNotExist:
        return Response({"message":"Expense with given name does not exist."})

    alternatives = []
    if expense.category == settings.FOOD:
        prompt = f"Generate a list of different company {source} prices different than {source}, in JSON format with only name and price fields, and 3 entries"
        alternatives = alternative_source_generator(prompt)
    elif expense.category == settings.ENTERTAINMENT:
        prompt = f"Generate a list of different company {source} subscriptions than {source}, in JSON format with only name and price fields, and 3 entries"
        alternatives = alternative_source_generator(prompt)
    return Response(json.loads(alternatives))


def alternative_source_generator(prompt):       
    openai.api_key = settings.OPEN_AI_API_KEY
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        max_tokens=1000,
        temperature= 0.9)
    return response["choices"][0]["text"]
