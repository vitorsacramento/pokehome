import React, { ChangeEvent, useState } from 'react';
import { api } from '../../api';
import { Pokemon } from '../../Models/Pokemon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { PokemonCard } from './PokemonCard';
import './styles.css';

export const Pokemons = () => {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const load = async () => {
        setLoading(true);
        let response = await api.loadPokemon(input);
        setLoading(false);
        setPokemon(response);
    }

    const handleGetPokemonName = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    const flipCard = () => {
        const card = document.querySelector('.card');
        card?.classList.add('flip');
    }

    const removeFlipCard = () => {
        const card = document.querySelector('.card');
        card?.classList.remove('flip');
    }

    const handleGetPokemon = () => {
        flipCard();
        load();
    }

    return (
        <React.Fragment>
            <div className="pokemons">
                <div className="pokemons-search">
                    <input
                        type="text"
                        placeholder=" "
                        id="pokemons"
                        autoComplete='off'
                        onChange={handleGetPokemonName}
                        onFocus={removeFlipCard}
                    />
                    <label htmlFor="pokemons">Buscar Pokemons</label>
                    <button className="btn-search" onClick={handleGetPokemon} disabled={input == '' ? true : false}>
                        <span>BUSCAR POKEMON </span>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className="pokemons-result">
                    <PokemonCard pokemon={pokemon} loading={loading} />
                </div>
            </div >
        </React.Fragment>
    );
}
