import React, {useEffect, useMemo, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {postAPI} from "./store/news/PostService";
import Post from "./Post";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {ApiService} from "./API/ApiService";
import {fetchPosts} from "./store/redusers/ActionCreators";
import PostList from "./components/PostList";

function App() {
    const [darkMode, setDarkMode] = useState<boolean>(false)



    useEffect(()=>{
        const body = document.getElementsByTagName("body")[0]
        if(darkMode){
            document.documentElement.classList.add("dark")
            body.classList.add("dark:bg-dark")
        } else {
            document.documentElement.classList.remove("dark")
            body.classList.add("bg-light")
        }
    },[darkMode])


    
    return (
        <div className="App container mx-auto flex flex-col items-center">
            <button onClick={()=>{setDarkMode(!darkMode)}}>{darkMode ? "Turn on light": "Turn on dark"}</button>
            {/*<h1 className="text-3xl text-center">Welcome</h1>*/}
            <PostList/>
      </div>
    );
}

export default App;
