# Generated by Django 4.1.3 on 2022-11-09 16:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_member_profile'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='tags',
            field=models.JSONField(default='', verbose_name='Tags'),
            preserve_default=False,
        ),
    ]
