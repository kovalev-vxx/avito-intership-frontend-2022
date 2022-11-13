import React, {useEffect, useMemo} from 'react';
import logo from './logo.svg';
import './App.css';
import {postAPI} from "./store/news/PostService";
import Post from "./Post";


function App() {

  const {data: IDs} = postAPI.useFetchNewPostIDsQuery(100, {
    pollingInterval: 60000
  })


  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        {
          IDs && IDs.map(ID=>(
              <Post ID={ID}></Post>
            ))
        }
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
