import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';
import Button from './Button';

const TYPES = pokemons.reduce((prev, curr) => {
    !prev.includes(curr.type) && prev.push(curr.type);

    return prev;
}, []);

class Pokedex extends React.Component {
    constructor() {
        super();

        this.handlePokemonIndex = this.handlePokemonIndex.bind(this);
        this.handleFilterButton = this.handleFilterButton.bind(this);

        this.state = {
            pokemonsArray: pokemons,
            pokemonIndex: 0,
            activeFilter: 'All',
        };
        
    }

    handlePokemonIndex() {
        const { pokemonsArray } = this.state;
        
        this.setState((previousState, _props) => ({
            pokemonIndex: previousState.pokemonIndex < pokemonsArray.length - 1 ? previousState.pokemonIndex + 1 : 0,
        }));        
    }

    handleFilterButton({ target }) {
        const { name: pokemonType } = target;
        const filtered = pokemons.filter((pokemon) => pokemon.type === pokemonType);

        this.setState({
            activeFilter: pokemonType,
            pokemonsArray: pokemonType === 'All' ? pokemons : filtered,
            pokemonIndex: 0
        });
    }

    render() {
        const { pokemonsArray, pokemonIndex, activeFilter } = this.state;
        const pokemon = pokemonsArray[pokemonIndex];
    
        return (
            <div className="pokedex">
                <Pokemon key={pokemon.id} pokemon={pokemon} />
                <div className="buttons-container">
                    <Button
                      className="next"
                      onClick={ this.handlePokemonIndex }
                      disabled={ pokemonsArray.length === 1 }
                      name={ 'Next pokémon' }
                    />
                    <ul className="buttons-list">
                      <li>
                          <Button
                            className={ activeFilter === 'All' && 'active'}
                            name="All"
                            onClick={ this.handleFilterButton }
                            disabled={ false }
                          />
                      </li>
                      {TYPES.map((type) => (
                        <li key={ type }>
                            <Button
                            className={ activeFilter === type && 'active' }
                            name={ type }
                            onClick={ this.handleFilterButton }
                            disabled={ false }
                            />
                        </li>
                      ))}
                    </ul>
                 </div>
            </div>
        );
    }
}

export default Pokedex;