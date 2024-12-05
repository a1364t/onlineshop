from django.shortcuts import render
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import CustomUserChangeForm


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

    return render(request, 'account/profile.html', {'form': form})
