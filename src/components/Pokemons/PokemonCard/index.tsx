import { Pokemon } from '../../../Models/Pokemon';
import logo from '../../../assets/img/logo.png';
import spinner from '../../../assets/img/pokebola.png';
import './styles.css';

type PokemonCardProps = {
    pokemon?: Pokemon | undefined;
    loading: boolean;
}

export const PokemonCard = ({ pokemon, loading }: PokemonCardProps) => {

    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={logo} alt="" width={150} />
                </div>

                <div className="card-back">
                    <div className="card-back-inner">
                        {loading &&
                            <div className="spinning">
                                <img src={spinner} />
                            </div>}
                        <div className="pokemon-name">
                            <h2>{pokemon?.name}</h2>
                            <small>Nº {pokemon?.id < 99 ? `0${pokemon?.id}` : pokemon?.id}</small>
                        </div>

                        <div className="pokemon-pic">
                            <img src={pokemon?.sprites['front_default']} />
                        </div>

                        <div className="pokemon-data">
                            <div className="pokemon-data-type">
                                <span>TYPE(S):</span>
                                <ul>
                                    {pokemon?.types.map((_item: any, index: any) => (
                                        <li key={index}>
                                            {pokemon.types[index].type['name']}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pokemon-data-weight">
                                <span>WEIGHT:</span>
                                <ul>
                                    <li>
                                        {pokemon?.weight}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}