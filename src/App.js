// import './assets/css/dark.css';
import { useState } from "react";
import GlobalStyle from "./components/styles/Global.styles";
import Tutorial from "./components/Tutorial";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <GlobalStyle />
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <Tutorial />
      </ThemeContext.Provider>
    </>
  );
}
