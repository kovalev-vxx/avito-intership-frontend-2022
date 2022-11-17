import React, {useEffect, useMemo, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PostPage from "./pages/PostPage";
import MainPage from "./pages/MainPage";
import {ThemeContext} from "./contexts/ThemeContext";

function App() {
    const darkModeFromLocalStorage = useMemo(()=>{
        const theme = localStorage.getItem("theme")
        return theme === "dark";
    },[])
    const [darkMode, setDarkMode] = useState<boolean>(darkModeFromLocalStorage)

    useEffect(()=>{
        const body = document.getElementsByTagName("body")[0]
        if(darkMode){
            document.documentElement.classList.add("dark")
            body.classList.add("dark:bg-dark")
            localStorage.setItem("theme", "dark")

        } else {
            document.documentElement.classList.remove("dark")
            body.classList.add("bg-light")
            localStorage.setItem("theme", "light")
        }
    },[darkMode])

    
    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route path="/post/:id" component={PostPage}/>
                </Switch>
            </Router>
        </ThemeContext.Provider>
    );
}

export default App;
