import React, {FC, useEffect, useState} from 'react';
import PostItem from "../items/PostItem";
import {fetchPosts} from "../../store/redusers/ActionCreators";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {AiOutlineReload} from "react-icons/ai"
import {BarLoader} from "react-spinners"
import {useSortPosts} from "../../hooks/useSortPosts";
import {ESortBy} from "../../models/ESortBy";
import SortSelector from "../selectors/SortSelector";
import AppButton from "../buttons/AppButton";


const PostsList:FC = () => {
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
        <>
            {error ? <><h1 className="font-bold text-red-500 text-center">News not found</h1></> :
                <>
                    <div className="flex justify-between text-center items-center h-12">
                        <span className="w-16 flex justify-start">{!isLoading && <SortSelector sortBy={sort} setSort={setSort}/>}</span>
                        <span>{isLoading ? <BarLoader color={"#06b6d4"} loading={isLoading}/> : <span className="text-lightMutedText dark:text-darkMutedText">{!isLoading && <>Total {posts.length}</>}</span>}</span>
                        <span className="w-16 flex justify-end">{!isLoading && <AppButton onClick={()=>{setUpdate(!update)}}><AiOutlineReload size={"25"}/></AppButton>}</span>
                    </div>
                    <ol className={"flex flex-col gap-2"}>
                        {sortedPosts.map(post=>(
                            post.id && <PostItem key={post.id} post={post} />
                        ))}
                    </ol>
                </>}
        </>
    );
};


export default PostsList;