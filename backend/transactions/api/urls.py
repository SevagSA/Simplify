from django.urls import path
from .views import ExpensesList, ExpensesDetail

urlpatterns = [
    path('expenses/', ExpensesList.as_view()),
    path('expenses/<int:pk>', ExpensesDetail.as_view()),
]