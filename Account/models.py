from django.db import models


class User(models.Model):
    user_uniq_key = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return self.user_uniq_key