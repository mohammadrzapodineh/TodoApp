from . import jalali
from django.utils import timezone


def number_to_persian(number):
    numbers = {
        '0': "۰",
        '1': "۱",
        '2': "۲",
        '3': "۳",
        '4': "۴",
        '5': "۵",
        '6': "۶",
        '7': "۷",
        '8': "۸",
        '9': "۹"
    }

    for e, p in numbers.items():
        number = number.replace(e, p)

    return number


def jalali_converter(time, detail_show=True):
    jalali_month = [
        'فروردین',
        'اردیبهشت',
        'خرداد',
        'تیر',
        'مرداد',
        'شهریور',
        'مهر',
        'آبان',
        'آ‌ذر',
        'دی',
        'بهمن',
        'اسفند',
    ]
    time_to_str = f"{time.year} {time.month} {time.day}"
    time = timezone.localtime(time)
    time_j_to_list = list(jalali.Gregorian(time_to_str).persian_tuple())
    for index, month in enumerate(jalali_month):
        if time_j_to_list[1] == index+1:
            time_j_to_list[1] = month
            break
    output = f"  {time_j_to_list[2]} {time_j_to_list[1]} {time_j_to_list[0]}   ساعت   {time.minute}: {time.hour}"
    if not detail_show:
        output = f"{time_j_to_list[2]} {time_j_to_list[1]} {time_j_to_list[0]}"
    return number_to_persian(output)
