import { Container } from '../Container';
import './styles.css';

export const Footer = () => {

    return (
        <footer>
            <Container flexDirection='column' alignItem='center'>
                <p>POKEHOME | {new Date().getFullYear()}</p>
                <p>Developed by <strong>Vitor Sacramento</strong> | oct 22 | ReactJS</p>
            </Container>
        </footer>
    );
}