import React from "react";
import "./App.css";
import { PokemonCard } from "./components/PokemonCard";

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
    // main app
    <div className="app">
      {/* title-bar */}
      <div className="title-bar">
        <h3>PokeDex</h3>
      </div>

      <div className="container">
        <PokemonCard />
      </div>
    </div>
    // main app end
  );
}

export default App;
