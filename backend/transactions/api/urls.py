from django.urls import path
from .views import ExpensesList, ExpensesDetail, CardList, CardDetail, get_spendings

urlpatterns = [
    path('expenses/', ExpensesList.as_view()),
    path('expenses/<int:pk>', ExpensesDetail.as_view()),
    path('expenses/spendings/', get_spendings),
    path('cards/', CardList.as_view()),
    path('cards/<int:pk>', CardDetail.as_view()),
]