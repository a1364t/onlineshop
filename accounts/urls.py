from django.urls import path
from allauth.account.views import ConfirmEmailView, PasswordResetView, PasswordResetFromKeyView, PasswordResetFromKeyDoneView
from .views import CustomPasswordResetFromKeyView, CustomPasswordChangeView, profile

urlpatterns = [
    # Email confirmation URL
    path('accounts/confirm-email/<str:key>/',
         ConfirmEmailView.as_view(), name='account_confirm_email'),

    # Profile URL
    path('profile/', profile, name='profile'),

    # Password reset using key
    path("password/reset/key/<uidb64>/<token>/",
         CustomPasswordResetFromKeyView.as_view(), name="account_password_reset_from_key"),

    # Password reset done view
    path("password/reset/key/done/", PasswordResetFromKeyDoneView.as_view(
        template_name='account/password_reset_from_key_done.html'),
        name="account_reset_password_from_key_done"),

    # Change password URL
    path('change-password/', CustomPasswordChangeView.as_view(
        template_name='account/password_change_form.html'), name='account_change_password'),
]
