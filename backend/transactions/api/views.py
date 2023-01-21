from transactions.models import Expenses
from transactions.api.serializers import ExpensesSerializer
from rest_framework import generics


class ExpensesList(generics.ListCreateAPIView):
    queryset = Expenses.objects.all()
    serializer_class = ExpensesSerializer


class ExpensesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Expenses.objects.all()
    serializer_class = ExpensesSerializer