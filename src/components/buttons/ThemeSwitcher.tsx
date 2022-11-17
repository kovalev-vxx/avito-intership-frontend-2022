import React, {useContext} from 'react';
import {ThemeContext} from "../../contexts/ThemeContext";
import AppButton from "./AppButton";
import {BsFillSunFill, BsFillMoonFill} from "react-icons/bs"



const ThemeSwitcher = () => {
    const themeContext = useContext(ThemeContext)
    return (
        <AppButton className="dark:bg-darkElement w-20" onClick={()=>{themeContext?.setDarkMode(!themeContext?.darkMode)}}>
            {themeContext?.darkMode ? <BsFillSunFill size={20}/> : <BsFillMoonFill size={20}/> }
        </AppButton>
    );
};

export default ThemeSwitcher;