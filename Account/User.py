from django.conf import settings
from Todo.utils import get_random_uniq_string


class UserSession:
    def __init__(self, request):
        self.session = request.session
        user = self.session.get(settings.USER_SESSION_ID)
        if not user:
            user_id = get_random_uniq_string()
            if user_id in user.values():
                user_id = get_random_uniq_string()
            user = self.session[settings.USER_SESSION_ID] = {'user_id': user_id}
        self.user = user

    def get(self):
        return self.user

    def save(self):
        self.session.modified = True
