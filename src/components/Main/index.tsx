import { Container } from "../Container";
import { Pokemons } from "../Pokemons";
import './styles.css';

export const Main = () => {

    return (
        <main>
            <Container>
                <div className="main-content">
                    <Pokemons />
                </div>
            </Container>
        </main>
    );
}