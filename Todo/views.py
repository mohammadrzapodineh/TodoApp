from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from .serializers import TodoSerializer
from .models import Todo
from rest_framework.decorators import api_view


def test_view(request):
    return render(request, 'Todo/todo.html')


@api_view(['GET'])
def get_todo(request):
    query = Todo.objects.all()
    serializer = TodoSerializer(query, many=True)
    return Response(data=serializer.data, status=status.HTTP_200_OK)