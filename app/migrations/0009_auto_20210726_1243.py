# Generated by Django 3.2.5 on 2021-07-26 10:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_player_short_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Gameweek',
            fields=[
                ('number', models.IntegerField(primary_key=True, serialize=False)),
                ('deadline_time', models.CharField(max_length=100, null=True)),
                ('finished', models.BooleanField(null=True)),
                ('data_checked', models.BooleanField(null=True)),
                ('is_previous', models.BooleanField(null=True)),
                ('is_current', models.BooleanField(null=True)),
                ('is_next', models.BooleanField(null=True)),
            ],
        ),
        migrations.AlterField(
            model_name='fixture',
            name='finished',
            field=models.BooleanField(null=True),
        ),
        migrations.AlterField(
            model_name='fixture',
            name='gameweek',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='fixture',
            name='name_a',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='fixture',
            name='name_h',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='fixture',
            name='short_name_a',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='fixture',
            name='short_name_h',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='fixture',
            name='team_a_difficulty',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='fixture',
            name='team_h_difficulty',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='form',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='full_name',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='ict_index',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='minutes',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='points_per_game',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='points_per_minute',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='points_per_price',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='points_per_price_per_game',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='points_per_price_per_minute',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='position',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='price',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='short_name',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='status',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='takes_corners',
            field=models.BooleanField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='takes_freekicks',
            field=models.BooleanField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='takes_penalties',
            field=models.BooleanField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='team',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='total_points',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='web_name',
            field=models.CharField(max_length=100, null=True),
        ),
    ]