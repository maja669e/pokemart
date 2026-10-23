'use client'

import Link from 'next/link'
import { useCart } from '../../components/CartContext'

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart()

  // Calculate the total price
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <section>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>
          Your cart is empty. <Link href="/shop">Browse Pokémon</Link>
        </p>
      ) : (
        <>
          {cartItems.map(item => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>Price: {item.price} PokéCoins</p>

                <label>
                  Quantity:{' '}
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={event => {
                      const quantity = Number(event.target.value)

                      if (quantity >= 1) {
                        updateQuantity(item.id, quantity)
                      }
                    }}
                  />
                </label>

                <p>
                  Subtotal: {item.price * item.quantity} PokéCoins
                </p>

                <button onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </article>
          ))}

          <h3>Total: {total} PokéCoins</h3>
          <Link href="/checkout">Go to Checkout</Link>
        </>
      )}
    </section>
  )
}