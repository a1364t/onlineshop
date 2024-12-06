from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import CustomUserChangeForm
from orders.models import Order


@login_required
def profile(request):
    if request.method == 'POST':
        form = CustomUserChangeForm(
            request.POST, request.FILES, instance=request.user)
        if form.is_valid():
            form.save()
            return redirect('profile')
    else:
        form = CustomUserChangeForm(instance=request.user)

    # Fetch the user's orders
    orders = Order.objects.filter(user=request.user).prefetch_related(
        'items').order_by("-datetime_created")

    # total_price = orders.get_total_price()
    return render(request, 'account/profile.html', {
        'form': form,
        'orders': orders,
        # 'total_price': total_price,
    })
