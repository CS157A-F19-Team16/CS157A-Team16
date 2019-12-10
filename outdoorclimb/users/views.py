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


@csrf_exempt
def add_comment(request):
    if request.method == 'POST':
        request_body = request.body
        json_string = request_body.decode('utf8')
        data = json.loads(json_string)
        now = datetime.now()
        date = now.strftime("%Y/%m/%d %H:%M:%S")
        print(date)
        query = 'INSERT INTO users_comment VALUES(\'' + \
            data['email'] + '\',\'' + data['routeId'] + '\',\'' + \
                date + '\',\'' + data['commentText'] + '\');'
        with connection.cursor() as cursor:
            cursor.execute(query)
        return JsonResponse(data, safe=False)


@csrf_exempt
def get_comments(request):
    comments = []
    print("get comments query")
    if request.method == 'POST':
        request_body = request.body
        json_string = request_body.decode('utf8')
        print("get comments query")
        data = json.loads(json_string)
        query = "SELECT * FROM users_comments WHERE route_id = \'" + \
            data['route_id'] + 'ORDER BY date_posted DESC \';'
        select_query = Comment.objects.raw(query)
        print("get comments success")
        print(query + " yields " + str(len(select_query)))
        for row in select_query:
            query2 = "SELECT name FROM users_user WHERE email = \'" + \
                row.author_email + '\';'
            username = User.objects.raw(query2)
            comments.append(
                {"username": username, "text": row.text, "date_posted": row.date_posted})
        return JsonResponse(comments, safe=False)
