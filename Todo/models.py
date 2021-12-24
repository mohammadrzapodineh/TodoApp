from django.db import models


class Todo(models.Model):
    name = models.CharField(max_length=120, verbose_name='نام یادداشت')
    created_date = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ ایجاد')
    do_date = models.DateTimeField(verbose_name='تاریخ ایجاد')
    is_do = models.BooleanField(default=False, verbose_name='انجام شده یا نشده ')
    description = models.TextField(verbose_name='توضیحات')