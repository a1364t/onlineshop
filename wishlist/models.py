from django.db import models
from django.contrib.auth import get_user_model
from products.models import Product


class Wishlist(models.Model):
    user = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name="wishlists")
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="wishlists")
    added_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        # Ensure a user can only have one wishlist item per product
        unique_together = ('user', 'product')

    def __str__(self):
        return f"{self.user.username} - {self.product.title}"

    def get_absolute_url(self):
        return self.product.get_absolute_url()
