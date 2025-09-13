import React from 'react'
import { Link } from 'react-router-dom'
import BlogListing from '../components/BlogListing'
import MyClients from '../components/MyClients'
import PageTitle from '../components/PageTitle'

function Blog() {
  return (
    <>
      <PageTitle title="Blog" />
      <BlogListing />
      {/* Styled section for Pokemon games */}
      <section className="pokemon-section">
        <h2>Pokémon Go / Pokémon Games</h2>
        <p>Check out my Pokémon games section for cool features!</p>
        <Link to="/pokemon-games">
          <button>Go to Pokémon Games</button>
        </Link>
      </section>
      <MyClients />
    </>
  )
}

export default Blog