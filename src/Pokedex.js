import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends React.Component {
    constructor() {
        super();

        
        this.handlePokemonIndex = this.handlePokemonIndex.bind(this);
        this.handleFilterButton = this.handleFilterButton.bind(this);
        this.handleAllButton = this.handleAllButton.bind(this);

        this.state = {
            pokemonsArray: pokemons,
            pokemonIndex: 0,
            Fire: false,
            Psychic: false,
            All: true,
        };
        
    }

    handlePokemonIndex() {
        const { pokemonsArray } = this.state;
        
        this.setState((previousState, _props) => ({
            pokemonIndex: previousState.pokemonIndex < pokemonsArray.length - 1 ? previousState.pokemonIndex + 1 : 0,
        }))
        
    }

    handleFilterButton({ target }) {
        const { name: pokemonType } = target;
        const filtered = pokemons.filter((pokemon) => pokemon.type === pokemonType);

        this.state[pokemonType] ? this.setState({
            [pokemonType]: false,
            pokemonsArray: pokemons,
            pokemonIndex: 0,
            All: true,
        }) : this.setState({
            Fire: false,
            Psychic: false,
            All: false,
        }, () => this.setState({
            [pokemonType]: true,
            pokemonsArray: filtered,
            pokemonIndex: 0,
        }))
    }

    handleAllButton() {
        this.setState({
            All: true,
            Fire: false,
            Psychic: false,
            pokemonsArray: pokemons,
            pokemonIndex: 0,
        });
    }

    render() {
        const { pokemonsArray, pokemonIndex, Fire, Psychic, All } = this.state;
        const pokemon = pokemonsArray[pokemonIndex];
    
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
                      className={`button ${ All ? 'active' : ''}`}
                      name="All"
                      onClick={ this.handleAllButton }
                    >
                        All
                    </button>
                    <button
                      className={`button ${ Fire ? 'active' : ''}`}
                      name="Fire"
                      onClick={ this.handleFilterButton }
                    >
                        Fire
                    </button>
                    <button
                      className={`button ${ Psychic ? 'active' : ''}`}
                      name="Psychic"
                      onClick={ this.handleFilterButton }
                    >
                        Psychic
                    </button>
                 </div>
            </div>
        );
    }
}

export default Pokedex;