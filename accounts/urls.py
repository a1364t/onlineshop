
from allauth.account.views import ConfirmEmailView

urlpatterns = [
    # other URLs
    path('accounts/confirm-email/<str:key>/',
         ConfirmEmailView.as_view(), name='account_confirm_email'),
]
