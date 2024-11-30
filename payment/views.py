from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from django.http import Http404
from orders.models import Order
import stripe
from django.conf import settings
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse


# Set secret key
stripe.api_key = settings.STRIPE_TEST_SECRET_KEY


def payment_process(request):
    # Get order id from session
    order_id = request.session.get('order_id')

    # Get the order object
    order = get_object_or_404(Order, id=order_id)

    order_items = order.items.all()  # This gets all associated OrderItem objects

    # Total price calculation
    # Ensure this returns the correct price in dollars
    total_price = order.get_total_price()
    cents_total_price = total_price * 100  # Convert to cents for Stripe

    try:
        # Create a PaymentIntent
        intent = stripe.PaymentIntent.create(
            amount=int(cents_total_price),
            currency='aud',
            metadata={'order_id': order.id}
        )
        # Send the client secret to the frontend to complete the payment
        return render(request, 'payment/payment_process.html', {
            'client_secret': intent.client_secret,
            'stripe_public_key': settings.STRIPE_TEST_PUBLIC_KEY,
            'order_items': order_items,
            'total_price': total_price,
        })

    except stripe.error.StripeError as e:
        return JsonResponse({'error': str(e)}, status=400)


def payment_success(request):
    """
    This view is triggered after the user is redirected from Stripe after a successful payment.
    """
    # Get the order id from the session
    order_id = request.session.get('order_id')

    # Get the order object
    order = get_object_or_404(Order, id=order_id)

    order_items = order.items.all()  # This gets all associated OrderItem objects

    # Total price calculation
    total_price = order.get_total_price()

    # Retrieve the payment intent ID from the query parameters
    payment_intent_id = request.GET.get('payment_intent')
    if not payment_intent_id:
        return Http404("Payment intent ID is missing from the URL")

    try:
        # Retrieve the payment intent details from Stripe
        payment_intent = stripe.PaymentIntent.retrieve(payment_intent_id)

        if payment_intent.status == 'succeeded':
            # Update the order status
            order.is_paid = True
            order.payment_status = 'Payment successful'
            order.save()

            # Send a confirmation email to the user
            subject = 'Order Confirmation'
            html_message = render_to_string('payment/email_order_confirmation.html', {
                'order': order,
                'order_items': order_items,
                'total_price': total_price,
            })
            # Assuming the order has a user with an email attribute
            recipient_email = order.user.email

            # Use EmailMessage to send HTML emails
            email = EmailMessage(
                subject=subject,
                body=html_message,
                from_email=settings.EMAIL_HOST_USER,
                to=[recipient_email],
            )
            email.content_subtype = 'html'  # Set the email content to HTML
            email.send(fail_silently=False)

            # Redirect to the success page or another URL as needed
            return render(request, 'payment/payment_success.html', {
                'order': order,
                'order_items': order_items,
                'total_price': total_price,
            })
        else:
            # Payment failed
            order.payment_status = 'Payment failed'
            order.save()

            # Redirect to the failure page
            return render(request, 'payment/payment_failure.html', {'order': order})

    except stripe.error.StripeError as e:
        return JsonResponse({'error': str(e)}, status=400)
