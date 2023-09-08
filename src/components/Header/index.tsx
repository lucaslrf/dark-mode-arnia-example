import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const Header = () => {
    const theme = useContext(ThemeContext);  
    
    return (
        <div>
            <h1>Meu Header - Qualquer coisa - {theme.valueTheme}</h1>            
        </div>
    )
}