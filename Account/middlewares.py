from .User import UserSession
from .models import User


def user_set_information_middleware(get_response):

    def middleware(request):
        user_session = UserSession(request)
        user = user_session.get()
        user_is_exsits = User.objects.filter(user_uniq_key=user["user_id"]).exists()
        if not user_is_exsits:
            User.objects.create(user_uniq_key=user["user_id"])
        response = get_response(request)

        return response

    return middleware
