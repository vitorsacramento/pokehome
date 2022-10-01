import { Container } from "../Container";
import './styles.css';

export const Main = () => {

    return (
        <main>
            <Container justifyContent='space-between'>
                <div className="left-side">
                    LEFT-SIDE
                </div>

                <div className="right-side">
                    RIGHT-SIDE
                </div>
            </Container>
        </main>
    );
}