# Generated by Django 2.0.1 on 2018-08-23 00:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0005_article_phone'),
    ]

    operations = [
        migrations.RenameField(
            model_name='article',
            old_name='thumb',
            new_name='picture',
        ),
    ]