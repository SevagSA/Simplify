# Generated by Django 3.2 on 2023-01-21 17:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('transactions', '0007_auto_20230121_1747'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='expenses',
            name='is_paid',
        ),
    ]