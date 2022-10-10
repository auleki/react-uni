import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { GlobalStyles } from './components/Global';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import { dark, light } from './styles/Theme.styled';

// interface IBio {
//     name: string
//     age: string
// }

function App() {
    // const [{ name, age }, setBio] = useState<IBio>({} as IBio)
    const [selectedTheme, setSelectedTheme] = useState<Object>(light)
    const [isDarkMode, setIsDarkMode] = useState(false)

    const handleThemeChange = (theme: typeof light) => {
        setSelectedTheme(theme)
    }

    const toggleTheme = () => setIsDarkMode(darkMode => !darkMode)

    return (
        <ThemeProvider theme={isDarkMode ? dark : light}>
            <GlobalStyles />
            <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <Main />
            <Footer />
        </ThemeProvider>
    );
}
export default App;
