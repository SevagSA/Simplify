from transactions.models import Expenses, Card
from transactions.api.serializers import ExpensesSerializer, CardSerializer

from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import ExpensesSerializer, CardSerializer


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
    spendings = Expenses.objects.filter(is_income=False)
    serializer = ExpensesSerializer(spendings,many=True)
    return Response(serializer.data)
