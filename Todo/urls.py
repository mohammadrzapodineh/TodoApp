from django.urls import path
from .views import test_view

app_name = "Todo"

urlpatterns = [
    path("todo/", test_view, name="todo_home")
]