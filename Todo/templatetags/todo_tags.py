from django import template

register = template.Library()


@register.simple_tag
def active_tag(request, view_name, *args):
    views_name = [view_name]
    for view in args:
        views_name.append(view)
    if request.resolver_match.view_name in views_name:
        return 'active'