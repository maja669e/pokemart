import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const dispatch = useDispatch()

  // Fetch Pokémon from the API
  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=20'
        )

        if (!response.ok) {
          throw new Error('Failed to fetch Pokémon')
        }

        const data = await response.json()

        // Fetch details and images for each Pokémon
        const details = await Promise.all(
          data.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url)
            const detail = await response.json()

            return {
              id: detail.id,
              name: detail.name,
              price: detail.base_experience || 10,
              image: detail.sprites.front_default
            }
          })
        )

        setProducts(details.filter(product => product.image))
      } catch (error) {
        console.error(error)
        setError('Could not load Pokémon. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchPokemon()
  }, [])

  if (loading) return <p>Loading Pokémon...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      <h2>Our Pokémon</h2>

      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>
            <p>Price: {product.price} PokéCoins</p>

            <button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
