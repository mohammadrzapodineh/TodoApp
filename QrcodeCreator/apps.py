from django.apps import AppConfig


class QrcodecreatorConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'QrcodeCreator'

    def ready(self):
        from . import signals