import { useState } from 'react';
import './App.css'
import { Header } from './components/Header';
import { ThemeContext } from './context/ThemeContext';

type Theme = {
  valueTheme: string
}

function App() {
  const [theme, setTheme] = useState<Theme>({valueTheme: ""});

  const toogleDarkMode = () => {    
    setTheme(prevTheme => ( prevTheme.valueTheme === 'light' ? {valueTheme: 'dark'} : {valueTheme: 'light'} ));
    document.body.className = theme.valueTheme === 'light' ? 'theme-dark': 'theme-light'
  }

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Header />
        <button className={`button-${theme.valueTheme}`} onClick={() => toogleDarkMode()} >Modo escuro</button>
      </ThemeContext.Provider>     
    </>
  )
}

export default App
