import React from "react";

import { PokemonGrid } from "./components/PokemonGrid";
import { TitleBar } from "./components/TitleBar";

import "./App.css";

function App() {
  return (
    <div className="app">
      <TitleBar />
      <PokemonGrid />
    </div>
  );
}

export default App;
