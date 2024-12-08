from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .forms import CustomUserChangeForm
from orders.models import Order
from allauth.account.views import PasswordResetFromKeyView, PasswordChangeView
from django.urls import reverse_lazy


@login_required
def profile(request):
    if request.method == 'POST':
        form = CustomUserChangeForm(
            request.POST, request.FILES, instance=request.user)
        if form.is_valid():
            form.save()
            # Success message
            messages.success(
                request, "Your changes have been saved successfully!")
            return redirect('profile')
    else:
        form = CustomUserChangeForm(instance=request.user)

    # Fetch the user's orders
    orders = Order.objects.filter(user=request.user).prefetch_related(
        'items').order_by("-datetime_created")

    return render(request, 'account/profile.html', {
        'form': form,
        'orders': orders,
    })


class CustomPasswordChangeView(PasswordChangeView):
    template_name = 'account/password_change_form.html'
    # Redirect to the profile page after successful password change
    success_url = reverse_lazy('profile')

    def form_valid(self, form):
        return super().form_valid(form)


class CustomPasswordResetFromKeyView(PasswordResetFromKeyView):
    template_name = "account/password_reset_key_form.html"
