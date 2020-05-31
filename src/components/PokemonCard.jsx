import React from "react";

export class PokemonCard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.setState({ pokemonName: "Pikachu" });
  }

  render() {
    return (
      <div className="card">
        <img
          src="https://pokeres.bastionbot.org/images/pokemon/1.png"
          width={100}
          alt=""
        />
        <h4>
          <b>{this.state.pokemonName}</b>
        </h4>
        <p>Id: 1</p>
        <p>Type: 1</p>
      </div>
    );
  }
}
