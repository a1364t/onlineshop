from allauth.account.views import ConfirmEmailView
from django.urls import path
from . import views


urlpatterns = [
    # other URLs
    path('accounts/confirm-email/<str:key>/',
         ConfirmEmailView.as_view(), name='account_confirm_email'),
    path('profile/', views.profile, name='profile')
]
