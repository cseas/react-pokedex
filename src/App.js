import React from "react";
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
    // main app
    <div className="app">
      {/* title-bar */}
      <div className="title-bar">
        <h3>PokeDex</h3>
      </div>

      <div className="container">
        {/* pokemon card */}
        <div className="card">
          <img
            src="https://pokeres.bastionbot.org/images/pokemon/1.png"
            width={100}
          />
          <h4>
            <b>Bulbasaur</b>
          </h4>
          <p>Id: 1</p>
          <p>Type: 1</p>
        </div>
        {/* pokemon card end */}
      </div>
    </div>
    // main app end
  );
}

export default App;
