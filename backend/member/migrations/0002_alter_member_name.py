# Generated by Django 3.2 on 2023-01-22 12:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('member', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='name',
            field=models.CharField(blank=True, default='', max_length=30, null=True),
        ),
    ]