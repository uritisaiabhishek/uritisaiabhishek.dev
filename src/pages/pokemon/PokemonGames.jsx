import React from 'react'
import PageTitle from '../../components/PageTitle'

function PokemonGames() {
  return (
    <>
        <PageTitle title="Pokémon" />
        <section className="pokemon-games">
            <div className="container py-5 my-5">
                <div className="row gy-5">
                    <div className="col-md-6 col-lg-4">
                        <div className="pokemon-game-card">
                            <h3>Pokémon Sword and Shield</h3>
                            <p>Explore the Galar region with new Pokémon and adventures!</p>
                            <button>Learn More</button>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="pokemon-game-card">
                            <h3>Pokémon Eevee</h3>
                            <p>Join Eevee on a journey filled with fun and friendship!</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4">
                        <div className="pokemon-game-card">
                            <h3>Pokémon Go</h3>
                            <p>Catch Pokémon in the real world with augmented reality!</p>
                            <button>Learn More</button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    </>
  )
}

export default PokemonGames