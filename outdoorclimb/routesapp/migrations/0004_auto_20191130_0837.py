# Generated by Django 2.2.6 on 2019-11-30 08:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('routesapp', '0003_auto_20191127_1013'),
    ]

    operations = [
        migrations.AlterField(
            model_name='routes',
            name='profile_picture',
            field=models.CharField(max_length=1000),
        ),
    ]
