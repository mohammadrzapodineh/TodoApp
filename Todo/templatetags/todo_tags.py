from django import template
from common.utils import jalali_converter

register = template.Library()


@register.simple_tag
def active_tag(request, view_name, *args):
    views_name = [view_name]
    for view in args:
        views_name.append(view)
    if request.resolver_match.view_name in views_name:
        return 'active'


@register.filter('data_to_jalali')
def convert_to_jalali(value, arg):
    data = jalali_converter(value, detail_show=arg)
    return data