from django.urls import path
from .views import todo_home

app_name = "Todo"

urlpatterns = [
    path("todo/", todo_home, name="todo_home"),
]