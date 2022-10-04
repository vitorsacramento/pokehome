import { Container } from "../Container";
import logo from '../../assets/img/logo.png';
import './styles.css';


export const Header = () => {

    return (
        <header>
            <Container justifyContent="center">
                <div className="logo">
                    <img src={logo} alt="Logo Pokehome" />
                </div>
            </Container>

            <div className="pokeball-header">
                <div className="ball"></div>
            </div>
        </header>
    );
}