import React, {useEffect, useState} from 'react';
import PostItem from "./PostItem";
import {fetchPosts} from "../store/redusers/ActionCreators";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {AiOutlineReload} from "react-icons/ai"
import {BarLoader} from "react-spinners"
import {useSortPosts} from "../hooks/useSortPosts";
import {ESortBy} from "../models/ESortBy";


const PostList = () => {
    const dispatch = useAppDispatch()
    const {posts, isLoading, error} = useAppSelector(state=>state.postReducer)
    const [update, setUpdate] = useState<boolean>(true)

    useEffect(()=> {
        dispatch(fetchPosts(100, posts))
    }, [update])

    const sortedPosts = useSortPosts(posts,ESortBy.TIME_ASC)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setUpdate(update => !update)
        }, 60000)
        return () => clearInterval(interval);
    },[])

    return (
        <div className="container mx-auto px-4 max-w-3xl flex flex-col gap-2">
            <div className="flex justify-between text-center items-center h-12">
                <span className="text-lightMutedText dark:text-darkMutedText">{!isLoading && <>Total {posts.length}</>}</span>
                <span>{isLoading ? <BarLoader color={"#06b6d4"} loading={isLoading}/> : <span className="font-light text-lightH1Text dark:text-darkH1Text">Fresh news for you</span>}</span>
                <span>{!isLoading && <button className="bg-cyan hover:bg-cyan600 text-white font-bold p-2 rounded" onClick={()=>{setUpdate(!update)}}><AiOutlineReload size={"25"}/></button>}</span>
                <select className="block py-2.5 px-0 text-sm text-center text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option value="volvo">Recent</option>
                    <option value="saab">Old</option>
                    <option value="mercedes">Score ASC</option>
                    <option value="audi">SCORE DESC</option>
                </select>
            </div>
            <ol className={"flex flex-col gap-2"}>
                {sortedPosts.map(post=>(
                    post.id && <PostItem key={post.id} post={post} />
                ))}
            </ol>
        </div>
    );
};

export default PostList;