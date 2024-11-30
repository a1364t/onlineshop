from django.urls import path

from .views import payment_process, payment_success

app_name = 'payment'

urlpatterns = [
    path('process/', payment_process, name='payment_process'),
    path('success/', payment_success, name='payment_success')
]
