from allauth.account.views import ConfirmEmailView, PasswordResetFromKeyDoneView
from django.urls import path
from .views import CustomPasswordResetFromKeyView
from . import views


urlpatterns = [
    # other URLs
    path('accounts/confirm-email/<str:key>/',
         ConfirmEmailView.as_view(), name='account_confirm_email'),
    path('profile/', views.profile, name='profile'),
    path(
        "password/reset/key/<uidb36>-<key>/",
        CustomPasswordResetFromKeyView.as_view(),
        name="account_reset_password_from_key",
    ),
    path(
        "password/reset/key/done/",
        PasswordResetFromKeyDoneView.as_view(),
        name="account_reset_password_from_key_done",
    ),

]

# urlpatterns.extend(
#     [
#         # password reset

#         re_path(
#             r"^password/reset/key/(?P<uidb36>[0-9A-Za-z]+)-(?P<key>.+)/$",
#             views.password_reset_from_key,
#             name="account_reset_password_from_key",
#         ),
#         path(
#             "password/reset/key/done/",
#             views.password_reset_from_key_done,
#             name="account_reset_password_from_key_done",
#         ),
#     ]
# )
