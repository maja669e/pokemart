import Link from 'next/link'
import { notFound } from 'next/navigation'

async function getPokemon(id) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  )

  if (!response.ok) {
    return null
  }

  const pokemon = await response.json()

  return {
    id: pokemon.id,
    name: pokemon.name,
    price: pokemon.base_experience || 10,
    image: pokemon.sprites.front_default,
    height: pokemon.height,
    weight: pokemon.weight,
    types: pokemon.types.map(item => item.type.name)
  }
}

export default async function PokemonDetails({ params }) {
  const { id } = await params
  const pokemon = await getPokemon(id)

  if (!pokemon) {
    notFound()
  }

  return (
    <section className="pokemon-details">
      <Link href="/shop">← Back to Shop</Link>

      <div className="details-card">
        <img src={pokemon.image} alt={pokemon.name} />

        <div>
          <h2>{pokemon.name}</h2>

          <p>Price: {pokemon.price} PokéCoins</p>
          <p>Height: {pokemon.height / 10} m</p>
          <p>Weight: {pokemon.weight / 10} kg</p>
          <p>Type: {pokemon.types.join(', ')}</p>
        </div>
      </div>
    </section>
  )
}
