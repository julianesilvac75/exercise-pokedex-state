import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super();

        this.state = {
            pokemonIndex: 0
        };
        
    }

    nextPokemon() {

    }

    render() {
        const pokemon = this.props.pokemons[this.state.pokemonIndex];

        return (
            <div className="pokedex">
                 <Pokemon key={pokemon.id} pokemon={pokemon} />
                 <div className="buttons-container">
                     <button>Next pokémon</button>
                 </div>
            </div>
        );
    }
}

export default Pokedex;