import React, {useEffect, useMemo} from 'react';
import logo from './logo.svg';
import './App.css';
import {postAPI} from "./store/news/PostService";
import Post from "./Post";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {ApiService} from "./API/ApiService";
import {fetchPosts} from "./store/redusers/ActionCreators";
import PostList from "./components/PostList";


function App() {

  // const {data: IDs} = postAPI.useFetchNewPostIDsQuery(100, {
  //   pollingInterval: 60000
  // })

  const ids = [33591228, 33591224, 33591204, 33591196, 33591170, 33591149, 33591143, 33591140, 33591117]
  const dispatch = useAppDispatch()
  const {posts, isLoading, error} = useAppSelector(state=>state.postReducer)

  useEffect(()=>{
    dispatch(fetchPosts(5))
      },
      [])





  return (
    <div className="App">
      <h1>Hello World!</h1>
      {isLoading && <h1>Идет загрузка</h1>}
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
