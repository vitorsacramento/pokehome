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

            <div className="pokemons-results">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.id}.png`} alt="" />
            </div>
        </div>
    );
}