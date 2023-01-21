from rest_framework import serializers

from transactions.models import Card, Expenses


class CardSerializer(serializers.ModelSerializer):

    class Meta:
        model = Card
        exclude = ('member', )
    
class ExpensesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Expenses
        fields = "__all__"

