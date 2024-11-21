from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from products.models import Product
from .models import Wishlist
from django.contrib import messages

# Wishlist view for authenticated users


@login_required
def wishlist_view(request):
    """ View the user's wishlist """
    wishlist_items = Wishlist.objects.filter(user=request.user)
    return render(request, 'wishlist/wishlist.html', {'wishlist_items': wishlist_items})

# Add a product to the wishlist


@login_required
def add_to_wishlist(request, product_id):
    """ Add a product to the wishlist """
    product = get_object_or_404(Product, id=product_id)

    # Check if the product is already in the wishlist
    if Wishlist.objects.filter(user=request.user, product=product).exists():
        messages.error(request, "This product is already in your wishlist.")
        return redirect('wishlist:wishlist_view')

    # Add the product to the wishlist
    Wishlist.objects.create(user=request.user, product=product)
    messages.success(request, "Product added to your wishlist.")
    return redirect('wishlist:wishlist_view')


# Remove a product from the wishlist


@login_required
def remove_from_wishlist(request, product_id):
    """ Remove a product from the wishlist """
    product = get_object_or_404(Product, id=product_id)

    # Check if the product is in the wishlist
    wishlist_item = Wishlist.objects.filter(
        user=request.user, product=product).first()
    if wishlist_item:
        wishlist_item.delete()

    return redirect('wishlist:wishlist_view')  # Redirect to the wishlist page
