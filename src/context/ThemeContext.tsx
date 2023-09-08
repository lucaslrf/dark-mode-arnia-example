import { createContext } from "react";

// light ou dark
type Theme = {
    valueTheme: string
}

export const ThemeContext = createContext<Theme>({
    valueTheme: "light"
});