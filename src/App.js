import React from "react";

import { PokemonGrid } from "./components/PokemonGrid";
import { TitleBar } from "./components/TitleBar";

import "./App.css";

const PokeAPI = "https://pokeapi.co/api/v2/pokemon?limit=15";

function App() {
  let pokemons = [];
  async function getPokemons() {
    await fetch(PokeAPI).then(function (response) {
      response.json().then(function (data) {
        console.log(data.results);
      });
    });
  }

  getPokemons();

  return (
    <div className="app">
      <TitleBar />
      <PokemonGrid />
    </div>
  );
}

export default App;
