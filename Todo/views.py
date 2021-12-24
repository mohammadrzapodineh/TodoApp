from django.shortcuts import render
from django.http.response import HttpResponse


def test_view(request):
    return render(request, 'Todo/todo.html')