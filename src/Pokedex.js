import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super();

        this.handlePokemonIndex = this.handlePokemonIndex.bind(this);

        this.state = {
            pokemonIndex: 0
        };
        
    }

    handlePokemonIndex() {
        const { pokemons } = this.props;
        const { pokemonIndex } = this.state;

        if (pokemonIndex >= pokemons.length - 1) {
            this.setState({
                pokemonIndex: 0
            })
        } else {
            this.setState((previousState, _props) => ({
                pokemonIndex: previousState.pokemonIndex + 1
            }))
        }
    }

    render() {
        const pokemon = this.props.pokemons[this.state.pokemonIndex];

        return (
            <div className="pokedex">
                 <Pokemon key={pokemon.id} pokemon={pokemon} />
                 <div className="buttons-container">
                     <button onClick={this.handlePokemonIndex}>Next pokémon</button>
                 </div>
            </div>
        );
    }
}

export default Pokedex;