from django.shortcuts import render
from Account.User import UserSession
from .models import Todo
from .forms import CreateTodoForm


def todo_home(request):
    session = UserSession(request)
    todo_creation_form = CreateTodoForm(request.POST or None)
    if todo_creation_form.is_valid():
        pass
    user_session = session.get()
    todos = Todo.objects.filter(user__user_uniq_key=user_session["user_id"])
    context = {
        'todos': todos,
        'todo_form': todo_creation_form
    }
    return render(request, 'Todo/todo.html', context)
