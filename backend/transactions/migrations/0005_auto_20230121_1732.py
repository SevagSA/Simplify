# Generated by Django 3.2 on 2023-01-21 17:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('transactions', '0004_alter_card_card_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='card',
            name='card_type',
            field=models.CharField(choices=[('Debit', 'Debit Card'), ('Credit', 'Credit Card')], default='Credit', max_length=6),
        ),
        migrations.CreateModel(
            name='Expenses',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('source', models.CharField(max_length=20)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=8)),
                ('is_recurring', models.BooleanField(default=False)),
                ('frequency', models.CharField(choices=[('WEEKLY', 'WEEKLY'), ('MONTHLY', 'MONTHLY'), ('YEARLY', 'YEARLY')], default='MONTHLY', max_length=7)),
                ('date_of_expense', models.DateField()),
                ('is_paid', models.BooleanField(default=False)),
                ('is_income', models.BooleanField(default=False)),
                ('card', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='transactions.card')),
            ],
        ),
    ]
