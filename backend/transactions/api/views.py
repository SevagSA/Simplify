from transactions.models import Expenses, Card
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
def get_spendings(request):
<<<<<<< Updated upstream
    card = request.data.get("card")
    spendings = Expenses.objects.filter(card=card).filter(is_income=False)
=======
    spendings = Expenses.objects.filter(is_income=False)
    
>>>>>>> Stashed changes
    serializer = ExpensesSerializer(spendings,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_recent_spendings(request):
<<<<<<< Updated upstream
    card = request.data.get("card")
    spendings = Expenses.objects.filter(card=card).filter(is_income=False).order_by('-date_of_expense')[:3]
    serializer = ExpensesSerializer(spendings, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_expenses_for_month(request, card, month, year, is_income):
    # card = request.data.get("card")
    # month = request.data.get("month")
    # year = request.data.get("year")
    # is_income = request.data.get("isIncome")

    expenses = Expenses.objects.filter(card=card).filter(
        is_income=is_income).filter(date_of_expense__year=year).filter(date_of_expense__month=month)
    serializer = ExpensesSerializer(expenses, many=True)
    return Response(serializer.data)


# TODO get all spendings for card
# TODO get all income for card
=======
    spendings = Expenses.objects.filter(is_income=False).order_by('-date_of_expense')[:3]

    serializer = ExpensesSerializer(spendings,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_highest_recurring_expense(request):
    spendings = Expenses.objects.filter(is_income=False).exclude(frequency = settings.ONCE).order_by('amount')[:5]
    
    serializer = ExpensesSerializer(spendings,many=True)
    return Response(serializer.data)    
>>>>>>> Stashed changes
