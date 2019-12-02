from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
from django.http import HttpResponse
from .models import Parks, Routes, Boulder_Routes, Sport_Routes, Traditional_Routes, Post
from django.http import JsonResponse
from django.db import connection
import json
import hashlib
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from .serializers import PostSerializer


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


def query_route(request, id):
    route = Routes.objects.raw(
        'SELECT * FROM routesapp_routes WHERE route_id=' + id)
    data = []
    for row in route:
        print(type(row))
        data.append({'route_id': row.route_id, 'route_name': row.route_name, 'park_name': row.park_name,
                     'route_location_on_park': row.route_location_on_park, 'description': row.description, 'grade': row.grade,
                     'rating': row.rating, 'profile_picture': row.profile_picture})
    return JsonResponse(data, safe=False)


@csrf_exempt
def get_routes_of_park(request):
    routes = []
    if request.method == 'POST':
        request_body = request.body
        json_string = request_body.decode('utf8')
        data = json.loads(json_string)
        query = "SELECT * FROM routesapp_routes r WHERE r.park_name = \'" + \
            data['parkName'] + '\';'
        select_query = Routes.objects.raw(query)
        print(query + " yields " + str(len(select_query)))
        for row in select_query:
            routes.append({"routes_id": row.route_id, "route_name": row.route_name, "park_name": row.park_name, "route_location_on_park": row.route_location_on_park,
                           "description": row.description, "grade": row.grade, "rating": row.rating, "profile_picture": row.profile_picture})
        return JsonResponse(routes, safe=False)


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


@csrf_exempt
def search_route(request):
    if request.method == 'POST':
        request_body = request.body
        json_string = request_body.decode('utf8')
        print(json_string)
        data = json.loads(json_string)
        routes = []
        if data['boulderingChecked'] or data['routeName'] != "":
            with connection.cursor() as cursor:
                routes_query = Routes.objects.raw(
                    create_boulder_query(data['boulderGradeOne'], data['boulderGradeTwo'], data['routeName']))  # Enter proper data
                for row in routes_query:
                    routes.append({"routes_id": row.route_id, "route_name": row.route_name, "park_name": row.park_name, "route_location_on_park": row.route_location_on_park,
                                   "description": row.description, "grade": row.grade, "rating": row.rating, "profile_picture": row.profile_picture})
        if data['sportChecked'] or data['routeName'] != "":
            with connection.cursor() as cursor:
                routes_query = Routes.objects.raw(
                    create_sport_query(data['routeGradeOne'], data['routeGradeTwo'], data['routeName']))
                for row in routes_query:
                    routes.append({"routes_id": row.route_id, "route_name": row.route_name, "park_name": row.park_name, "route_location_on_park": row.route_location_on_park,
                                   "description": row.description, "grade": row.grade, "rating": row.rating, "profile_picture": row.profile_picture})
        if data['traditionalChecked'] or data['routeName'] != "":
            with connection.cursor() as cursor:
                routes_query = Routes.objects.raw(
                    create_traditional_query(data['routeGradeOne'], data['routeGradeTwo'], data['routeName']))
                for row in routes_query:
                    routes.append({"routes_id": row.route_id, "route_name": row.route_name, "park_name": row.park_name, "route_location_on_park": row.route_location_on_park,
                                   "description": row.description, "grade": row.grade, "rating": row.rating, "profile_picture": row.profile_picture})
        return JsonResponse(routes, safe=False)


def create_boulder_query(gradeOne, gradeTwo, routeName):
    boulder_grades = ["", "V0", "V1", "V2", "V3", "V4", "V5", "V6",
                      "V7", "V8", "V9", "V10", "V11", "V12", "V13", "V14", "V15"]
    gradeHigh = gradeTwo
    gradeLow = gradeOne
    if boulder_grades.index(gradeOne) >= boulder_grades.index(gradeTwo):
        gradeHigh = gradeOne
        gradeLow = gradeTwo
    append_grades = ""
    for grade in boulder_grades:
        if boulder_grades.index(gradeLow) <= boulder_grades.index(grade) and boulder_grades.index(gradeHigh) >= boulder_grades.index(grade) and grade != "":
            where_clause = "OR r.grade=\""+grade + "\" "
            append_grades = append_grades + where_clause
    query = 'SELECT r.* FROM routesapp_routes r, routesapp_boulder_routes WHERE r.route_id = routesapp_boulder_routes.route_id'
    if routeName != "":
        query = query + " AND r.route_name LIKE \"%%" + routeName + "%%\""
    if append_grades != "":
        query = query + " AND (" + append_grades[2:] + ");"
    else:
        query = query + ";"
    print(query)
    return query


def create_sport_query(gradeOne, gradeTwo, routeName):
    route_grades = generate_route_grades()
    gradeHigh = gradeTwo
    gradeLow = gradeOne
    if route_grades.index(gradeOne) >= route_grades.index(gradeTwo):
        gradeHigh = gradeOne
        gradeLow = gradeTwo
    append_grades = ""
    for grade in route_grades:
        if route_grades.index(gradeLow) <= route_grades.index(grade) and route_grades.index(gradeHigh) >= route_grades.index(grade) and grade != "":
            where_clause = "OR r.grade=\""+grade + "\" "
            append_grades = append_grades + where_clause
    query = 'SELECT r.* FROM routesapp_routes r, routesapp_sport_routes WHERE r.route_id = routesapp_sport_routes.route_id'
    if routeName != "":
        query = query + " AND r.route_name LIKE \"%%" + routeName + "%%\""
    if append_grades != "":
        query = query + " AND (" + append_grades[2:] + ");"
    else:
        query = query + ";"
    print(query)
    return query


def create_traditional_query(gradeOne, gradeTwo, routeName):
    route_grades = generate_route_grades()
    gradeHigh = gradeTwo
    gradeLow = gradeOne
    if route_grades.index(gradeOne) >= route_grades.index(gradeTwo):
        gradeHigh = gradeOne
        gradeLow = gradeTwo
    append_grades = ""
    for grade in route_grades:
        if route_grades.index(gradeLow) <= route_grades.index(grade) and route_grades.index(gradeHigh) >= route_grades.index(grade) and grade != "":
            where_clause = "OR r.grade=\""+grade + "\" "
    query = 'SELECT r.* FROM routesapp_routes r, routesapp_traditional_routes WHERE r.route_id = routesapp_traditional_routes.route_id'
    if routeName != "":
        query = query + " AND r.route_name LIKE \"%%" + routeName + "%%\""
    if append_grades != "":
        query = query + " AND (" + append_grades[2:] + ");"
    else:
        query = query + ";"
    print(query)
    return query


def generate_route_grades():
    routes_grade = [""]
    for i in range(2, 17):
        gradeNumber = "5." + str(i)
        if i <= 9:
            routes_grade.append(gradeNumber)
        else:
            routes_grade.append(gradeNumber + 'a')
            routes_grade.append(gradeNumber + 'b')
            routes_grade.append(gradeNumber + 'c')
            routes_grade.append(gradeNumber + 'd')
    return routes_grade


class PostView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        posts_serializer = PostSerializer(data=request.data)
        if posts_serializer.is_valid():
            posts_serializer.save()
            return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', posts_serializer.errors)
            return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
