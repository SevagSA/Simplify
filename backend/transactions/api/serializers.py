import datetime
from rest_framework import serializers
from transactions.models import Card, Expenses


class CardSerializer(serializers.ModelSerializer):

    class Meta:
        model = Card
        fields = "__all__"
    
class ExpensesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Expenses
        fields = "__all__"

    def validate(self, data):
        if data['date_of_expense'] > datetime.date.today():
            raise serializers.ValidationError("You can't add expenses due in the future.")
        return data
