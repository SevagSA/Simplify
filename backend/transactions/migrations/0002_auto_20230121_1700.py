# Generated by Django 3.2 on 2023-01-21 17:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transactions', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='card',
            name='card_balance',
            field=models.DecimalField(decimal_places=2, default=1, max_digits=8),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='card',
            name='card_number',
            field=models.TextField(default=0, max_length=30),
        ),
    ]