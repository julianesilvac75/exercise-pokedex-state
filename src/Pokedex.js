import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends React.Component {
    constructor() {
        super();

        
        this.handlePokemonIndex = this.handlePokemonIndex.bind(this);
        this.handleFilterButton = this.handleFilterButton.bind(this);
        this.handleFilteredList = this.handleFilteredList.bind(this);
        
        
        this.state = {
            pokemonsArray: pokemons,
            pokemonIndex: 0,
            Fire: false,
            Psychic: false,
        };
        
    }

    handlePokemonIndex() {
        const { pokemons } = this.props;
        
        this.setState((previousState, _props) => ({
            pokemonIndex: previousState.pokemonIndex < pokemons.length - 1 ? previousState.pokemonIndex + 1 : 0,
        }))
        
    }

    handleFilteredList() {
        
    }

    handleFilterButton({ target }) {
        const { name: pokemonType } = target;


        this.state[pokemonType] ? this.setState({
            [pokemonType]: false,
        }) : this.setState({
            Fire: false,
            Psychic: false,
        }, () => this.setState({
            [pokemonType]: true,
        }))

        // // this.props.pokemons.forEach((pokemon) => {
        // //     if(pokemon.type === pokemonType) {
        // //         filteredPokemonsIndex.push(pokemon);
        // //     }
        // // })
        
        // if (this.state[pokemonType] === false) {
        //     this.setState({
        //         [pokemonType]: true,
        //         // pokemonsArray: filteredPokemonsIndex
        //     });
        //     event.target.style.border = ;
        // } else {
        //     this.setState({
        //         [pokemonType]: false,
        //         // pokemonsArray: this.props.pokemons
        //     })
        //     event.target.style.border = ;
        // }
    }

    render() {
        const { pokemonsArray, pokemonIndex, Fire, Psychic } = this.state;
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