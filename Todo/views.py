from django.shortcuts import render, redirect, get_object_or_404
from Account.User import UserSession
from Account.models import User
from .models import Todo
from .forms import CreateTodoForm
from django.contrib import messages


def todo_home(request):
    session = UserSession(request)
    user_session = session.get()
    todo_creation_form = CreateTodoForm(request.POST or None)
    if todo_creation_form.is_valid():
        title = todo_creation_form.cleaned_data.get('title')
        description = todo_creation_form.cleaned_data.get('description')
        do_date = todo_creation_form.cleaned_data.get('do_date')
        is_do = todo_creation_form.cleaned_data.get('is_do')
        user = get_object_or_404(User, user_uniq_key=user_session['user_id'])
        Todo.objects.create(user=user, name=title, description=description, do_date=do_date, is_do=is_do)
        messages.success(request, 'تسک شما با موفقیت اضافه شد ')
        return redirect('Todo:todo_home')
    todos = Todo.objects.filter(user__user_uniq_key=user_session["user_id"])
    context = {
        'todos': todos,
        'todo_form': todo_creation_form
    }
    return render(request, 'Todo/todo.html', context)
