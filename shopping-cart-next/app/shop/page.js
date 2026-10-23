import Link from 'next/link'
import AddToCartButton from '../../components/AddToCartButton'

async function getPokemon() {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=20',
    { next: { revalidate: 3600 } }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon')
  }

  const data = await response.json()

  const pokemon = await Promise.all(
    data.results.map(async (item) => {
      const response = await fetch(item.url)
      const detail = await response.json()

      return {
        id: detail.id,
        name: detail.name,
        price: detail.base_experience || 10,
        image: detail.sprites.front_default
      }
    })
  )

  return pokemon.filter(item => item.image)
}

export default async function Shop() {
  const pokemon = await getPokemon()

  return (
    <section>
      <h2>Our Pokémon</h2>
      <p>Choose your favourite Pokémon for your collection!</p>

      <div className="product-grid">
        {pokemon.map(item => (
          <article className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>
            <p>Price: {item.price} PokéCoins</p>

            <Link href={`/shop/${item.id}`}>
              View Details
            </Link>
            
            <div class="button-buy">
            <AddToCartButton product={item} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
