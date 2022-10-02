import { ChangeEvent, useState } from 'react';
import { api } from '../../api';
import { Pokemon } from '../../Models/Pokemon';
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
                <button className="btn-search" onClick={handleGetPokemon}>BUSCAR</button>
            </div>

            <div className="pokemon-card">
                <div className="pokemon-card-title">
                    <h2>{pokemon?.name}</h2>
                    <small>{pokemon?.id}</small>
                </div>

                <div className="pokemon-card-body">
                    <img src={pokemon?.sprites['front_default']} />

                    <div className="pokemon-card-body-data">
                        <div className="pokemon-card-body-data-info">
                            <strong>WEIGHT: {pokemon?.weight}</strong>
                        </div>

                        <div className="pokemon-card-body-data-info">
                            <strong>TYPE: {
                                pokemon?.types.map((_item: any, index: any) => (
                                    pokemon?.types[index].type['name']
                                ))}
                            </strong>
                        </div>

                        <div className="pokemon-card-body-data-info">
                            <strong>ABILITIES: {
                                pokemon?.abilities.map((_item: any, index: any) => (
                                    pokemon.abilities[index].ability['name']
                                ))}
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



{/* <div className="pokemon-card-footer">
    
    <div className="abilities">abilities: </div>
</div> */}