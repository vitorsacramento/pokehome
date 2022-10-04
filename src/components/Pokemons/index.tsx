import { ChangeEvent, useState } from 'react';
import { api } from '../../api';
import { Pokemon } from '../../Models/Pokemon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './styles.css';

export const Pokemons = () => {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const [input, setInput] = useState('');

    const load = async () => {
        let response = await api.loadPokemon(input);
        setPokemon(response);
        console.log(response);
    }

    const handleGetPokemonName = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    const handleGetPokemon = () => {
        load();
    }

    return (
        <div className="pokemons">
            <div className="pokemons-search">
                <input type="text" placeholder=" " id="pokemons" autoComplete='off' onChange={handleGetPokemonName} />
                <label htmlFor="pokemons">Buscar Pokemons</label>
                <button className="btn-search" onClick={handleGetPokemon}>
                    <span> BUSCAR POKEMON </span>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>

            <div className="pokemons-result">
                <div className="pokemons-result-title">
                    <h2>{pokemon?.name}</h2>
                    <hr />
                    <small>{pokemon?.id}</small>
                </div>

                <div className="pokemons-result-body">
                    <div className="pokemons-result-body-pic">
                        <img src={pokemon?.sprites['front_default']} />
                    </div>

                    <div className="pokemons-result-body-data">
                        <div className="pokemons-result-body-data-weight">
                            <span>WEIGHT:</span>
                            <span>{pokemon?.weight}</span>
                        </div>

                        <div className="pokemons-result-body-data-type">
                            <span>TYPE(S):</span>
                            <ul>
                                {
                                    pokemon?.types.map((_item: any, index: any) => (
                                        <li>{pokemon?.types[index].type['name']}</li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="pokemons-result-body-data-ability">
                            <span>ABILITIES:</span>
                            <ul>
                                {
                                    pokemon?.abilities.map((_item: any, index: any) => (
                                        <li>{pokemon.abilities[index].ability['name']}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}



{/* <div className="pokemons-result-body-pic">
    <img src={pokemon?.sprites['front_default']} />
</div>

<div className="pokemons-result-body-data">
    <div className="pokemons-result-body-data-weight">
        <strong>WEIGHT: {pokemon?.weight}</strong>
    </div>
</div> */}