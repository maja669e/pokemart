'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '../../components/CartContext'

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart()
  const [message, setMessage] = useState('')

  // Calculate the total price
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  // Place the order
  async function placeOrder() {
    const response = await fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: cartItems,
        total: total
      })
    })

    if (response.ok) {
      clearCart()
      setMessage('Your order has been placed successfully!')
    } else {
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <section>
      <h2>Checkout</h2>

      {message ? (
        <p>{message}</p>
      ) : cartItems.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <Link href="/shop">Back to Shop</Link>
        </>
      ) : (
        <>
          <h3>Your Order</h3>

          {cartItems.map(item => (
            <article key={item.id}>
              <p>
                {item.name} × {item.quantity}
              </p>
              <p>
                Subtotal: {item.price * item.quantity} PokéCoins
              </p>
            </article>
          ))}

          <h3>Total: {total} PokéCoins</h3>

          <button onClick={placeOrder}>Place Order</button>
        </>
      )}
    </section>
  )
}