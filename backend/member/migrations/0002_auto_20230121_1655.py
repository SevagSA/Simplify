# Generated by Django 3.2 on 2023-01-21 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('member', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='monthly_budget',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=8),
        ),
        migrations.AlterField(
            model_name='member',
            name='personal_goal',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=8),
        ),
    ]