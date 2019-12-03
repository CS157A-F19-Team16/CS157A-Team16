from django.shortcuts import render
from .models import Explorer
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.db import connection
import json


# Create your views here.


@csrf_exempt
def register_explorer(request):
    if request.method == 'POST':
        request_body = request.body
        json_string = request_body.decode('utf8')
        data = json.loads(json_string)
        print(data)
        query = 'INSERT INTO users_explorer VALUES(\'' + \
            data['email'] + '\',\'' + data['fulladdress'] + \
                '\',\'' + str(data['phone']) + '\');'
        with connection.cursor() as cursor:
            cursor.execute(query)
        return JsonResponse(data, safe=False)
