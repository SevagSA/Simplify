from django.db import models
from member.models import Member
from django.conf import settings

# Create your models here.

class Card(models.Model):
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    card_number = models.CharField(max_length=30, default=0)
    
    # card_type = models.CharField(max_length=2,choices=[(settings.IS_DEBIT, 'Debit Card'), (settings.IS_CREDIT, 'Credit Card')])
    card_type = models.CharField(max_length=6, choices= settings.CARD_TYPES, default=settings.CREDIT)
    card_balance = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self) -> str:
        return f'{self.member} | {self.card_number}'