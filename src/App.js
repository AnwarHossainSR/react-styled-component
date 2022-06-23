// import './assets/css/dark.css';
import { useContext } from 'react';
import GlobalStyle from './components/styles/Global.styles';
import Tutorial from './components/Tutorial';
import { ThemeContext } from './context/ThemeContext';

export default function App() {
    const theme = useContext(ThemeContext);
    return (
        <>
            <GlobalStyle />
            <Tutorial />
        </>
    );
}