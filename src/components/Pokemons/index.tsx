import { ChangeEvent, useState } from 'react';
import { api } from '../../api';
import { Pokemon } from '../../Models/Pokemon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { PokemonCard } from './PokemonCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

export const Pokemons = () => {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const load = async () => {
        try {
            setLoading(true);
            let response = await api.loadPokemon(input);
            setLoading(false);
            setPokemon(response);
        } catch (error) {
            setLoading(false);
            toast.info('Nenhum Pokemon encontrado!');
        }
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
        if (input.match(/^[ \t]+$/)) {
            toast.info('Digite um nome de Pokemon válido');
        } else {
            flipCard();
            load();
        }
    }

    return (
        <div className="pokemons">
            <ToastContainer />
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
                <PokemonCard pokemon={pokemon} loading={loading} input={input} />
            </div>
        </div >
    );
}
