import React, { useState, useEffect } from "react";
import { PokemonCard } from "./PokemonCard";

const PokeAPI = "https://pokeapi.co/api/v2/pokemon?limit=150";

export function PokemonGrid() {
  // Hooks
  const [isPokemonListLoading, setIsPokemonListLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    const response = await fetch(PokeAPI);
    const data = await response.json();
    setPokemons(data.results);
    setIsPokemonListLoading(false);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  if (!isPokemonListLoading) {
    return (
      <div className="container">
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </div>
    );
  } else return <h3>Loading...</h3>;
}
