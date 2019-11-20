from django.shortcuts import render
from .models import Explorer
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse


# Create your views here.


@csrf_exempt
def register_explorer(request):
    if request.method == 'POST':
        string = request.body
        print("register explorer url")
        print(string)
        query = 'INSERT INTO users_explorer VALUES()'
        explorer = Explorer.objects.raw(
            query
        )
        data = []
        return JsonResponse(data, safe=False)
