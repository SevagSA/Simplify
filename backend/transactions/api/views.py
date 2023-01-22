from django.shortcuts import get_object_or_404
from datetime import date
import json
import re
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


@api_view(['POST', 'DELETE'])
def delete_card(request):
    card = get_object_or_404(Card, pk=request.data.get("id"))
    card.delete()
    return Response({'message': 'card was successfully deleted'})


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
def expense_categories(request):
    return Response(json.dumps(settings.EXPENSES_CATEGORY_LIST))


"""
calculate wether a given card's spending amount has went down compared to last month
calculate wether a given card's income amount has went up compared to last month

return appropriate boolean values for each scenario so that the frontend can display the
appropriate
"""

@api_view(['GET'])
def compare_last_months_spending_for_card(request, pk):
    today = date.today()
    month, year = (today.month-1, today.year) if today.month != 1 else (12, today.year-1)
    pre_month = today.replace(day=1, month=month, year=year)

    last_month_spendings = Expenses.objects.filter(card=pk).filter(is_income=False).filter(
        date_of_expense__month=pre_month.month).filter(date_of_expense__year=pre_month.year).aggregate(Sum('amount'))
    last_month_spendings_total = None
    if last_month_spendings['amount__sum']:
        last_month_spendings_total = '{:0.2f}'.format(last_month_spendings['amount__sum'])

    current_month_spendings = Expenses.objects.filter(card=pk).filter(is_income=False).filter(
        date_of_expense__month=today.month).filter(date_of_expense__year=today.year).aggregate(Sum('amount'))
    current_month_spendings_total = None
    if current_month_spendings['amount__sum']:
        current_month_spendings_total = '{:0.2f}'.format(current_month_spendings['amount__sum'])

    return Response({"last month": last_month_spendings_total, "current month": current_month_spendings_total})


@api_view(['GET'])
def compare_last_months_income_for_card(request, pk):
    today = date.today()
    month, year = (today.month-1, today.year) if today.month != 1 else (12, today.year-1)
    pre_month = today.replace(day=1, month=month, year=year)

    last_month_income = Expenses.objects.filter(card=pk).filter(is_income=True).filter(
        date_of_expense__month=pre_month.month).filter(date_of_expense__year=pre_month.year).aggregate(Sum('amount'))
    last_month_income_total = None
    if last_month_income['amount__sum']:
        last_month_income_total = '{:0.2f}'.format(last_month_income['amount__sum'])

    current_month_income = Expenses.objects.filter(card=pk).filter(is_income=True).filter(
        date_of_expense__month=today.month).filter(date_of_expense__year=today.year).aggregate(Sum('amount'))
    current_month_income_total = None
    if current_month_income['amount__sum']:
        current_month_income_total = '{:0.2f}'.format(current_month_income['amount__sum'])

    return Response({"last month": last_month_income_total, "current month": current_month_income_total})


@api_view(['GET'])
def get_income_for_this_month(request, card):
    today = date.today()
    income = Expenses.objects.filter(card=card).filter(is_income=True).filter(
        date_of_expense__month=today.month).order_by(
            "date_of_expense__day").values_list("date_of_expense", "amount")
    income_dict = {}
    for inc in income:
        income_dict[inc[0].day] = str(inc[1])
    return Response(json.dumps(income_dict))
    

@api_view(['GET'])
def get_spendings_for_this_month(request, card):
    today = date.today()
    income = Expenses.objects.filter(card=card).filter(is_income=False).filter(
        date_of_expense__month=today.month).order_by(
            "date_of_expense__day").values_list("date_of_expense", "amount")
    income_dict = {}
    for inc in income:
        income_dict[inc[0].day] = str(inc[1])
    return Response(json.dumps(income_dict))