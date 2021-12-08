import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

const TYPES = pokemons.reduce((prev, curr) => {
    !prev.includes(curr.type) && prev.push(curr.type);

    return prev;
}, []);

console.log(TYPES);

class Pokedex extends React.Component {
    constructor() {
        super();

        
        this.handlePokemonIndex = this.handlePokemonIndex.bind(this);
        this.handleFilterButton = this.handleFilterButton.bind(this);
        // this.handleAllButton = this.handleAllButton.bind(this);

        this.state = {
            pokemonsArray: pokemons,
            pokemonIndex: 0,
            activeFilter: 'All',
            // Fire: false,
            // Psychic: false,
            // All: true,
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

        this.setState({
            activeFilter: pokemonType,
            pokemonsArray: pokemonType === 'All' ? pokemons : filtered,
            pokemonIndex: 0
        })

        // this.state[pokemonType] ? this.setState({
        //     [pokemonType]: false,
        //     pokemonsArray: pokemons,
        //     pokemonIndex: 0,
        //     All: true,
        // }) : this.setState({
        //     Fire: false,
        //     Psychic: false,
        //     All: false,
        // }, () => this.setState({
        //     [pokemonType]: true,
        //     pokemonsArray: filtered,
        //     pokemonIndex: 0,
        // }))
    }

    // handleAllButton() {
    //     this.setState({
    //         All: true,
    //         Fire: false,
    //         Psychic: false,
    //         pokemonsArray: pokemons,
    //         pokemonIndex: 0,
    //     });
    // }

    render() {
        const { pokemonsArray, pokemonIndex, Fire, Psychic, All, activeFilter } = this.state;
        const pokemon = pokemonsArray[pokemonIndex];
    
        return (
            <div className="pokedex">
                <Pokemon key={pokemon.id} pokemon={pokemon} />
                <div className="buttons-container">
                    <button
                      className="button"
                      onClick={this.handlePokemonIndex}
                      disabled={ pokemonsArray.length === 1 }
                    >
                        Next pokémon
                    </button>
                    <button
                      className={`button ${ activeFilter === 'All' && 'active'}`}
                      name="All"
                      onClick={ this.handleFilterButton }
                    >
                        All
                    </button>
                    {TYPES.map((type) => (
                        <button
                        className={`button ${ activeFilter === type && 'active'}`}
                        name={type}
                        onClick={ this.handleFilterButton }
                        key={type}
                      >
                          {type}
                      </button>
                    ))}
                    {/* <button
                      className={`button ${ activeFilter === 'Fire' && 'active'}`}
                      name="Fire"
                      onClick={ this.handleFilterButton }
                    >
                        Fire
                    </button>
                    <button
                      className={`button ${ activeFilter === 'Psychic' && 'active'}`}
                      name="Psychic"
                      onClick={ this.handleFilterButton }
                    >
                        Psychic
                    </button> */}
                 </div>
            </div>
        );
    }
}

export default Pokedex;