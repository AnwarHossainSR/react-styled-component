import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Card from './Card';
import { Container } from './styles/Container.styles';

export default function Tutorial() {
    const { theme } = useContext(ThemeContext);
    return (
        <Container theme={theme}>
            <Card/>
        </Container>
    );
}