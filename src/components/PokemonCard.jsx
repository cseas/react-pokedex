import React, { useState, useEffect } from "react";

export function PokemonCard() {
  const [name, setName] = useState("Bulbasaur");

  useEffect(() => {
    setName("Pikachu");
  }, []);

  return (
    <>
      <div className="card">
        <img
          src="https://pokeres.bastionbot.org/images/pokemon/1.png"
          width={100}
          alt=""
        />
        <h4>
          <b>{name}</b>
        </h4>
        <p>Id: 1</p>
        <p>Type: 1</p>
      </div>
    </>
  );
}
