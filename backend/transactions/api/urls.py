from django.urls import path
from .views import (
    ExpensesList, ExpensesDetail, CardList, CardDetail,
    get_all_spendings_for_card, get_recent_spendings,
    get_expenses_for_month, get_highest_recurring_expense,
    sum_of_all_cards_for_member)

urlpatterns = [
    path('expenses/', ExpensesList.as_view()),
    path('expenses/<int:pk>', ExpensesDetail.as_view()),
    path('expenses/spendings/', get_all_spendings_for_card),
    path('expenses/spendings/recent',get_recent_spendings),
    path('expenses/spendings/highest', get_highest_recurring_expense),
    path('cards/', CardList.as_view()),
    path('cards/<int:pk>', CardDetail.as_view()),
    path('cards/<int:card>/<int:month>/<int:year>/<is_income>/', get_expenses_for_month),
    path('cards/sum-of-all/', sum_of_all_cards_for_member)

]