from .User import UserSession


def user_set_information_middleware(get_response):

    def middleware(request):
        user = UserSession(request)
        response = get_response(request)

        return response

    return middleware
