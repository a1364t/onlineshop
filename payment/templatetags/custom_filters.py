from django import template

register = template.Library()


@register.filter
def multiply(value, arg):
    try:
        return value * arg
    except (TypeError, ValueError):
        return 0


@register.filter
def sum_prices(items):
    return sum(item.price for item in items)


@register.filter
def calculate_total_price(orders):
    return sum(item.price * item.quantity for item in orders.items.all())
