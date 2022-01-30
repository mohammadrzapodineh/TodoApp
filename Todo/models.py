from django.db import models
from Account.models import User


class Todo(models.Model):
    user = models.ForeignKey(User, verbose_name='کاربر', db_index=True, on_delete=models.CASCADE)
    name = models.CharField(max_length=120, verbose_name='نام یادداشت')
    created_date = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ ایجاد')
    do_date = models.DateTimeField(verbose_name='تاریخ انجام ')
    is_do = models.BooleanField(default=False, verbose_name='انجام شده یا نشده ')
    description = models.TextField(verbose_name='توضیحات')

    def __str__(self):
        return self.name