from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from .models import Parks
from django.http import JsonResponse


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


def routes_parks_list(request):
    parks = Parks.objects.raw(
        'SELECT * FROM routesapp_parks')
    # parks needs to be json serializable
    data = []
    for row in parks:
        data.append({'name': row.name, 'location': row.location})
    return JsonResponse(data, safe=False)


def routes_park_detail(request, pk):
    name = "\"{}\"".format(pk)
    park = Parks.objects.raw(
        'SELECT * FROM routesapp_parks WHERE name=' + name)
    data = []
    for row in park:
        print(type(row))
        data.append({'name': row.name, 'location': row.location})
    return JsonResponse(data, safe=False)
