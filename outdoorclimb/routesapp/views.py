from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
from django.http import HttpResponse
from .models import Parks
from django.http import JsonResponse
from django.db import connection
import json
import hashlib


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


@csrf_exempt
def add_park(request):
    if request.method == 'POST':
        request_body = request.body
        json_string = request_body.decode('utf8')
        data = json.loads(json_string)
        query = 'INSERT INTO routesapp_parks VALUES(\'' + \
            data['parkName'] + '\',\'' + data['location'] + '\');'
        with connection.cursor() as cursor:
            cursor.execute(query)
        return JsonResponse(data, safe=False)


@csrf_exempt
def add_route(request):
    if request.method == 'POST':
        request_body = request.body
        json_string = request_body.decode('utf8')
        data = json.loads(json_string)
        blank = ''
        route_id = create_route_id(
            data['routeName'], data['parkName'])
        with connection.cursor() as cursor:
            cursor.execute('INSERT INTO routesapp_routes VALUES(%s, %s, %s, %s, %s, %s, %s, %s);', [
                           route_id, data['routeName'], data['parkName'], blank, data['routeDescription'], data['grade'], -1.0, data['routeProfile']])
            route_type = data['routeType']
            print(route_type)
            if route_type == 'bouldering':
                cursor.execute(add_boulder(route_id))
            elif route_type == 'traditional':
                cursor.execute(add_traditional(route_id))
            elif route_type == 'sport':
                cursor.execute('INSERT INTO routesapp_sport_routes VALUES(\'' +
                               route_id + '\',\'' + blank + '\',%s);', [0])
        return JsonResponse(data, safe=False)


def add_boulder(route_id):
    blank = ''
    return 'INSERT INTO routesapp_boulder_routes VALUES(\'' + route_id + '\',\'' + blank + '\');'


def add_traditional(route_id):
    blank = ''
    return 'INSERT INTO routesapp_traditional_routes VALUES(\'' + route_id + '\',\'' + blank + '\');'


def add_sport(route_id):
    blank = ''
    return 'INSERT INTO routesapp_sport_routes VALUES(\'' + route_id + '\',\'' + blank + '\',' + 0 + ');'


def create_route_id(route_name, park_name):
    concat = route_name + park_name
    return hashlib.sha224(concat.encode()).hexdigest()
