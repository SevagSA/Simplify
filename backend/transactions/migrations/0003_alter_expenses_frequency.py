# Generated by Django 3.2 on 2023-01-22 12:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transactions', '0002_auto_20230122_1227'),
    ]

    operations = [
        migrations.AlterField(
            model_name='expenses',
            name='frequency',
            field=models.CharField(choices=[('', '----'), ('One-time', 'One-time'), ('Daily', 'Daily'), ('Bi-Weekly', 'Bi-Weekly'), ('Weekly', 'Weekly'), ('Monthly', 'Monthly'), ('Yearly', 'Yearly')], default='One-time', max_length=17),
        ),
    ]
