from django.shortcuts import render
from .models import Explorer, Comment, User
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
    print("Trying to add")
    return None


@csrf_exempt
def get_comments(request):
    comments = []
    if request.method == 'POST':
        request_body = request.body
        json_string = request_body.decode('utf8')
        data = json.loads(json_string)
        print("get comments query")
        query = "SELECT * FROM users_comment WHERE route_id = \'" + \
            data['routeId'] + 'ORDER BY date_posted DESC \';'
        with connection.cursor() as cursor:
            select_query = Comment.objects.raw(query)
            print(query + " yields " + str(len(select_query)))
            for row in select_query:
                query2 = "SELECT name FROM users_user WHERE email = \'" + \
                    row.author_email + '\';'
                print("get username")
                username = User.objects.raw(query2)
                print("get username success")
                comments.append({"username": username, "text": row.text, "date_posted": row.date_posted})
        return JsonResponse(comments, safe=False)
