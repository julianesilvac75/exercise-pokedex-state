import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super();

        
        this.handlePokemonIndex = this.handlePokemonIndex.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        
        
        this.state = {
            pokemonsArray: [],
            pokemonIndex: 0,
            Fire: false,
            Psychic: false,
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

    handleFilter(event) {
        const { name: pokemonType } = event.target;
        const filteredPokemonsIndex = [];

        this.props.pokemons.forEach((pokemon) => {
            if(pokemon.type === pokemonType) {
                filteredPokemonsIndex.push(pokemon);
            }
        })
        
        if (this.state[pokemonType] === false) {
            this.setState({
                [pokemonType]: true,
                pokemonsArray: filteredPokemonsIndex
            });
            event.target.style.border = '2px solid gray';
        } else {
            this.setState({
                [pokemonType]: false,
                pokemonsArray: this.props.pokemons
            })
            event.target.style.border = '1px solid gray';
        }
    }

    render() {
        const pokemon = this.props.pokemons[this.state.pokemonIndex];

        return (
            <div className="pokedex">
                <Pokemon key={pokemon.id} pokemon={pokemon} />
                <div className="buttons-container">
                    <button
                      className="button"
                      onClick={this.handlePokemonIndex}
                    >
                        Next pokémon
                    </button>
                    <button
                      className="button"
                      onClick={this.handleFilter} name="Fire"
                    >
                        Fire
                    </button>
                    <button
                      className="button"
                      onClick={this.handleFilter} name="Psychic"
                    >
                        Psychic
                    </button>
                 </div>
            </div>
        );
    }
}

export default Pokedex;