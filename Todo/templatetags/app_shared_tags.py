from django import template

register = template.Library()


@register.inclusion_tag('shared/Header.html')
def include_header_section(request):
    context = {'request': request}
    return context


@register.inclusion_tag('shared/menu.html')
def include_menu_section(request):
    context = {'request': request}
    return context


@register.inclusion_tag('shared/Footer.html')
def include_footer_section():
    pass


