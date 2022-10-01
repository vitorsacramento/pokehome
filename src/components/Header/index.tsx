import { Container } from "../Container";
import logo from '../../assets/img/logo.png';
import { PokeIcon } from "./PokeIcon";
import './styles.css';


export const Header = () => {

    return (
        <header>
            <Container justifyContent="space-between">
                <div className="logo">
                    <img src={logo} alt="Logo Pokehome" />
                </div>

                <div className="pokeball">
                    <PokeIcon />
                </div>
            </Container>

            <div className="pokeball-header">
                <div className="ball"></div>
            </div>
        </header>
    );
}