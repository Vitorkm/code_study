# Generated by Django 4.1.3 on 2022-11-03 17:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, verbose_name='Name')),
                ('acronym', models.CharField(max_length=5, verbose_name='Acronym')),
                ('birthdate', models.DateField(max_length=30, verbose_name='BirthDate')),
                ('email', models.EmailField(max_length=254, verbose_name='Email')),
            ],
        ),
    ]
