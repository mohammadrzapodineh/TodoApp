from django.urls import path
from .views import test_view, get_todo

app_name = "Todo"

urlpatterns = [
    path("todo/", test_view, name="todo_home"),
    path("todo/get", get_todo, name="todo_get"),
]