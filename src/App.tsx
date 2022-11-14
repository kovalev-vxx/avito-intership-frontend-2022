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

  const dispatch = useAppDispatch()
  const {posts, isLoading, error} = useAppSelector(state=>state.postReducer)
    const [update, setUpdate] = useState<boolean>(true)

  useEffect(()=> {
      dispatch(fetchPosts(5))
      const interval = setInterval(()=>{
          dispatch(fetchPosts(5))
      }, 60000)
      return ()=>{
          clearInterval(interval)
      }
  }, [update])





  return (
    <div className="App">
      <h1>Hello World!</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{setUpdate(!update)}}>Refresh</button>
      {isLoading && <h1>Идет загрузка</h1>}
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
