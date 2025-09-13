import React from "react";
import { Route } from "react-router-dom";
import PokemonGames from "./PokemonGames";
// import other pokemon components as needed

export function PokemonRoutes() {
  return (
    <>
      <Route path="/pokemon-games" element={<PokemonGames />} />
      {/* Add more Pokémon-related routes here */}
    </>
  );
}