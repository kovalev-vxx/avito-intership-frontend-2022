import {createContext, Dispatch, SetStateAction} from "react";

interface themeContextInterface {
    darkMode: boolean;
    setDarkMode: Dispatch<SetStateAction<boolean>>
}

export const ThemeContext = createContext<themeContextInterface | null>(null)