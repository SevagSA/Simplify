from django.urls import path
from .views import (
    ExpensesList, ExpensesDetail, CardList, CardDetail,
    get_all_spendings_for_card, get_recent_spendings,
    get_expenses_for_month, get_highest_recurring_expense,
    sum_of_all_cards_for_member, get_all_income_for_card, expense_categories,
    compare_last_months_spending_for_card, compare_last_months_income_for_card)

urlpatterns = [
    path('expenses/', ExpensesList.as_view()),
    path('expenses/<int:pk>/', ExpensesDetail.as_view()),
    
    path('expenses/income/<int:card>/', get_all_income_for_card ),
    path('expenses/spendings/<int:card>/', get_all_spendings_for_card),
    
    path('expenses/spendings/recent/<int:card>/', get_recent_spendings),
    path('expenses/spendings/highest/<int:card>/', get_highest_recurring_expense),
    
    path('expenses/expense-categories/', expense_categories),

    path('cards/', CardList.as_view()),
    path('cards/<int:pk>/', CardDetail.as_view()),
    
    path('cards/<int:pk>/last-month-spendings/', compare_last_months_spending_for_card),
    path('cards/<int:pk>/last-month-income/', compare_last_months_income_for_card),
    
    path('cards/<int:card>/<int:month>/<int:year>/<is_income>/', get_expenses_for_month),
    
    path('cards/sum-of-all/', sum_of_all_cards_for_member),

]