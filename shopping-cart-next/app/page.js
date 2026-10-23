import Link from 'next/link'

export default function Home() {
  return (
    <section>
      <h2>Welcome to PokéMart!</h2>

      <p>
        Find your favourite Pokémon and add them to your collection.
      </p>

      <p>
        Browse our Pokémon and build your collection!
      </p>

      <Link href="/shop">
        <button>Explore Pokémon</button>
      </Link>
    </section>
  )
}
