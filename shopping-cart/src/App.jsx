// Import React Router
import { Routes, Route } from 'react-router-dom'

// Import components
import Layout from './components/Layout'

// Import pages
import Home from './pages/Home'
import Shop from './pages/Shop'
import CartPage from './pages/Cart'
import Checkout from './pages/Checkout'

function App() {
  return (
    <Routes>
      {/* Shared layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App