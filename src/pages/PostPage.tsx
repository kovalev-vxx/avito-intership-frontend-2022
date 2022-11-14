import React, {useMemo} from 'react';
import {useParams} from "react-router-dom";
import {useAppSelector} from "../hooks/redux";
import { RouteComponentProps } from 'react-router-dom';

interface PostPageProps{
    history: RouteComponentProps["history"]
}

const PostPage = ({history}: PostPageProps) => {
    const {posts, isLoading, error} = useAppSelector(state=>state.postReducer)
    const {id} =  useParams<{id?: string}>()
    const post = useMemo(()=>(posts.find(e=>(e.id.toString()===id))),[])

    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{history.goBack()}}>Go back</button>
            <h1>{post?.title}</h1>
        </div>
    );
};

export default PostPage;