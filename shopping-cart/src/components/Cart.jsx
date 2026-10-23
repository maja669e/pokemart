import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, clearCart } from '../redux/cartSlice'

function Cart() {
  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  // Calculate the total price
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Go catch some Pokémon!</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>Price: {item.price} PokéCoins</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>
                    Subtotal: {item.price * item.quantity} PokéCoins
                  </p>
                </div>

                <button
                  className="remove-button"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: {total} PokéCoins</h3>

            <button
              className="clear-button"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
