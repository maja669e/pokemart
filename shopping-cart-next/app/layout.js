import { CartProvider } from '../components/CartContext'
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'PokéMart',
  description: 'Your Pokémon webshop'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <h1>PokéMart 🎮</h1>

          <nav className="site-nav">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/checkout">Checkout</Link>
          </nav>
        </header>

        <CartProvider>
  <main className="site-main">
    {children}
  </main>
</CartProvider>
      </body>
    </html>
  )
}
