import Cart from '../components/Cart'

function Checkout() {
  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <p className="checkout-description">
        Review your Pokémon order before finishing.
      </p>

      <div className="checkout-order">
        <Cart />
      </div>
    </div>
  )
}

export default Checkout
