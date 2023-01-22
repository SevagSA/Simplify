from decimal import Decimal
from django.db import models
from member.models import Member
from django.conf import settings
from django.core.validators import MinValueValidator

class Card(models.Model):
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    bank_name = models.CharField(max_length=30, choices= settings.BANK_TYPES, default=settings.RBC)
    card_number = models.CharField(max_length=30, default=0)
    card_type = models.CharField(max_length=6, choices= settings.CARD_TYPES, default=settings.CREDIT)
    card_balance = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self) -> str:
        return f'{self.member} | {self.card_number}'


class Expenses(models.Model):
    card = models.ForeignKey(Card, on_delete=models.CASCADE)
    source = models.CharField(max_length=20, unique=True)
    amount = models.DecimalField(max_digits=8, decimal_places=2, validators=[MinValueValidator(Decimal('0.01'))])
    # if it's recurring, specificy the frequency
    frequency = models.CharField(max_length=17, choices=settings.FREQUENCY_TYPES, default=settings.ONCE)
    date_of_expense = models.DateField()
    # i.e income vs spending, if its spending, * -1 to do calculations
    is_income = models.BooleanField(default=False)
    category = models.CharField(max_length=13, choices=settings.EXPENSES_CATEGORY)


    def __str__(self) -> str:
        return f'{self.card.member} | {self.source}'
