import json
import re
import openai
from django.http import Http404
from django.dispatch import receiver
from django.db.models.signals import post_save
from decimal import Decimal
from django.db import models
from member.models import Member
from django.conf import settings
from rest_framework.response import Response
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
    alternative_amount = models.DecimalField(default= 0, max_digits=8, decimal_places=2)
    alternative_name = models.CharField(max_length=20, unique=True, null= True, blank=True)

    def __str__(self) -> str:
        return f'{self.card.member} | {self.source}'


    @staticmethod
    def open_ai_view(source):
        try:
            expense = Expenses.objects.get(source__iexact=source)
        except Expenses.DoesNotExist:
            raise Http404
        alternatives = []
        if expense.category == settings.FOOD:
            prompt = f"Generate a list of different company {source} prices different than {source}, in JSON format with only name and price fields, and 3 entries"
            alternatives = alternative_source_generator(prompt)
            alternatives_json = json.loads(alternatives)
            cheapest_alternative = sorted(alternatives_json, key=lambda d: d['price'])[0]
            cheapest_name = cheapest_alternative['name']
            cheapest_string = cheapest_alternative['price']
            cheapest_value = re.findall("\d+\.\d+",cheapest_string)[0]
            expense.alternative_amount = cheapest_value
            expense.alternative_name = cheapest_name
            expense.save()
        elif expense.category == settings.ENTERTAINMENT:
            prompt = f"Generate a list of different company {source} subscriptions than {source}, in JSON format with only name and price fields, and 3 entries"
            alternatives = alternative_source_generator(prompt)
            alternatives_json = json.loads(alternatives)
            cheapest_alternative = sorted(alternatives_json, key=lambda d: d['price'])[0]
            cheapest_name = cheapest_alternative['name']
            cheapest_string = cheapest_alternative['price']
            cheapest_value = re.findall("\d+\.\d+",cheapest_string)[0]
            expense.alternative_amount = cheapest_value
            expense.alternative_name = cheapest_name
            expense.save()


def alternative_source_generator(prompt):       
    openai.api_key = settings.OPEN_AI_API_KEY
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        max_tokens=1000,
        temperature= 0.5)
    return response["choices"][0]["text"]


@receiver(post_save, sender=Expenses)
def populate_alternative_expense(sender, instance, created, **kwargs):
    if created:
        Expenses.open_ai_view(instance.source)
