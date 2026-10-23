// Import React Router components
import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      {/* Page title */}
      <header>
       <h1>PokéMart</h1>
      </header>

      {/* Navigation menu */}
      <nav>
        <NavLink to="/">Home</NavLink>
        {' | '}
        <NavLink to="/shop">Shop</NavLink>
        {' | '}
        <NavLink to="/cart">Cart</NavLink>
        {' | '}
        <NavLink to="/checkout">Checkout</NavLink>
      </nav>

      {/* Display the current page */}
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout