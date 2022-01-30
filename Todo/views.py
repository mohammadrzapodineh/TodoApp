from django.shortcuts import render
from Account.User import UserSession
from .models import Todo


def todo_home(request):
    session = UserSession(request)
    user_session = session.get()
    todos = Todo.objects.filter(user__user_uniq_key=user_session["user_id"])
    context = {
        'todos': todos
    }
    return render(request, 'Todo/todo.html', context)
