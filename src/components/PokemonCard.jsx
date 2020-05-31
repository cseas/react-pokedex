import React, { useState, useEffect } from "react";

export function PokemonCard(props) {
  const [pokemonData, setPokemonData] = useState([]);
  const [isPokemonDataLoading, setIsPokemonDataLoading] = useState(true);

  const getPokemonData = async () => {
    const response = await fetch(props.pokemon.url);
    const data = await response.json();
    setPokemonData(data);
    setIsPokemonDataLoading(false);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  if (!isPokemonDataLoading) {
    return (
      <>
        <div className="card">
          <img
            src="https://pokeres.bastionbot.org/images/pokemon/1.png"
            width={100}
            alt=""
          />
          <h4>
            <b>{props.pokemon.name}</b>
          </h4>
          <p>Id: {pokemonData.order}</p>
          <p>Type: {pokemonData.types[0].type.name}</p>
        </div>
      </>
    );
  } else return <h3>Loading...</h3>;
}
