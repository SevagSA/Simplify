from rest_framework import serializers

from transactions.models import Card, Expenses


class CardSerializers(serializers.ModelSerializer):

    class Meta:
        model = Card
        exclude = ('member', )
    


