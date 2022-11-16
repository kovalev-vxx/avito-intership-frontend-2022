import React, {useEffect, useState} from 'react';
import PostItem from "./PostItem";
import {fetchPosts} from "../store/redusers/ActionCreators";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {AiOutlineReload} from "react-icons/ai"
import {BarLoader} from "react-spinners"
import {useSortPosts} from "../hooks/useSortPosts";
import {ESortBy} from "../models/ESortBy";
import SortSelector from "./SortSelector";
import AppButton from "./AppButton";


const PostList = () => {
    const dispatch = useAppDispatch()
    const {posts, isLoading, error} = useAppSelector(state=>state.postReducer)
    const [update, setUpdate] = useState<boolean>(true)
    const [sort, setSort] = useState<ESortBy>(ESortBy.TIME_ASC)

    useEffect(()=> {
        dispatch(fetchPosts(100, posts))
    }, [update])

    const sortedPosts = useSortPosts(posts, sort)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setUpdate(update => !update)
        }, 60000)
        return () => clearInterval(interval);
    },[])

    return (
        <div className="container mx-auto px-4 max-w-3xl flex flex-col gap-2">
            <div className="flex justify-between text-center items-center h-12">
                <span>{!isLoading && <SortSelector setSort={setSort}/>}</span>
                <span>{isLoading ? <BarLoader color={"#06b6d4"} loading={isLoading}/> : <span className="text-lightMutedText dark:text-darkMutedText">{!isLoading && <>Total {posts.length}</>}</span>}</span>
                <span>{!isLoading && <AppButton onClick={()=>{setUpdate(!update)}}><AiOutlineReload size={"25"}/></AppButton>}</span>
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