from django.shortcuts import render
from .models import Explorer, Comment, User
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.db import connection
from collections import namedtuple
import json
from datetime import datetime


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
        query = 'INSERT INTO users_comment (author_email, route_id, date_posted, text) VALUES(\'' + \
            data['email'] + '\',\'' + data['routeId'] + '\',\'' + \
                date + '\',\'' + data['commentText'] + '\');'
        with connection.cursor() as cursor:
            cursor.execute(query)
            # Get the added_comment in {username, text, date_posted}
            query2 = "SELECT name FROM users_user WHERE email = \'" + \
                data['email'] + '\';'
            cursor.execute(query2)
            username = cursor.fetchone()
            if username == None:
                query2 = "SELECT username FROM auth_user WHERE email = \'" + \
                    data['email'] + '\';'
                cursor.execute(query2)
                username = cursor.fetchone()
            comment = {"username": convert(
                username), "text": data['commentText'], "date_posted": date}
        return JsonResponse(comment, safe=False)


@csrf_exempt
def get_comments(request):
    comments = []
    if request.method == 'POST':
        request_body = request.body
        json_string = request_body.decode('utf8')
        data = json.loads(json_string)
        query = "SELECT * FROM users_comment WHERE route_id = \'" + \
            data['routeId'] + '\';'
        print(query)
        with connection.cursor() as cursor:
            cursor.execute(query)
            # print(dictfetchall(cursor))
            for row in namedtuplefetchall(cursor):
                query2 = "SELECT name FROM users_user WHERE email = \'" + \
                    row.author_email + '\';'
                with connection.cursor() as cursor2:
                    cursor2.execute(query2)
                    username = cursor2.fetchone()
                    if username == None:
                        query2 = "SELECT username FROM auth_user WHERE email = \'" + \
                            row.author_email + '\';'
                        cursor2.execute(query2)
                        username = cursor2.fetchone()
                comments.append(
                    {"username": convert(username), "text": row.text, "date_posted": row.date_posted})
        for c in comments:
            print(c)
        return JsonResponse(comments, safe=False)


def convert(s):

    # initialization of string to ""
    new = ""

    # traverse in the string
    for x in s:
        new += x

    # return string
    return new


def namedtuplefetchall(cursor):
    "Return all rows from a cursor as a namedtuple"
    desc = cursor.description
    nt_result = namedtuple('Result', [col[0] for col in desc])
    return [nt_result(*row) for row in cursor.fetchall()]
