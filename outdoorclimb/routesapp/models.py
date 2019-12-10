from django.db import models

# Create your models here.


class Parks(models.Model):
    name = models.CharField(max_length=100, primary_key=True)
    location = models.CharField(max_length=100)
    profile_picture = models.CharField(max_length=1000)

# Combined with relation to Park


class Rocks(models.Model):
    rock_name = models.CharField(max_length=100)
    park_name = models.CharField(max_length=100)
    rock_location_in_park = models.CharField(max_length=5000)

    class Meta:
        unique_together = [['rock_name', 'park_name']]

# Combined with relation Rock


class Routes(models.Model):
    route_id = models.CharField(max_length=64, primary_key=True)
    route_name = models.CharField(max_length=100)
    park_name = models.CharField(max_length=100)
    route_location_on_park = models.CharField(max_length=2000)
    description = models.CharField(max_length=2000)
    grade = models.CharField(max_length=5)
    rating = models.DecimalField(decimal_places=1, max_digits=2)
    profile_picture = models.CharField(max_length=1000)

    class Meta:
        unique_together = [['route_id', 'route_name', 'park_name']]


class Boulder_Routes(models.Model):
    route_id = models.CharField(
        max_length=64, primary_key=True)
    route_path = models.CharField(max_length=300)


class Sport_Routes(models.Model):
    route_id = models.CharField(
        max_length=64, primary_key=True)
    bolt_locations = models.CharField(max_length=300)
    number_of_pitches = models.IntegerField()


class Traditional_Routes(models.Model):
    route_id = models.CharField(
        max_length=64, primary_key=True)
    general_route_path = models.CharField(max_length=300)


class Pictures_of_Routes(models.Model):
    picture_id = models.CharField(max_length=64)
    photo = models.ImageField()
    time_posted = models.DateTimeField(auto_now_add=True)
    poster = models.CharField(max_length=20)


class Pitches(models.Model):
    route_id = models.CharField(
        max_length=64, primary_key=True)
    pitch_number = models.IntegerField()
    pitch_length_in_feet = models.IntegerField()
    description = models.CharField(max_length=5000)

    class Meta:
        unique_together = [['route_id', 'pitch_number']]

class Post(models.Model):
    image = models.ImageField(upload_to='post_images')
