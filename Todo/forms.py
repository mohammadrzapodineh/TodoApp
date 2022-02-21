from django import forms
from datetime import datetime


class CreateTodoForm(forms.Form):
    title = forms.CharField(max_length=220, widget=forms.TextInput(
        attrs={'class': 'form-control'}
    ))
    description = forms.CharField(max_length=2000, widget=forms.Textarea(
        attrs={'class': 'form-control', 'rows': 2}
    ))
    is_do = forms.BooleanField(required=False,widget=forms.CheckboxInput(
        attrs={'class': 'custom-control-input', 'type': 'checkbox', 'id': 'custom-check1'}
    ))
    do_date = forms.DateField(widget=forms.TextInput(
        attrs={'type': 'date', 'value': '2022-2-10', 'min': '2022/01/01'}
    ))
