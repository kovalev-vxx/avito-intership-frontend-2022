import React, {useEffect, useMemo, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import { RouteComponentProps } from 'react-router-dom';
import {ApiService} from "../API/ApiService";
import {commentSlice} from "../store/redusers/CommentSlice";
import {fetchComments} from "../store/redusers/ActionCreators";
import parse from "html-react-parser"
import {IComment} from "../models/IComment";
import CommentItem from "../components/CommentItem";
import PostItem from "../components/PostItem";
import CommentWithAnswers from "../components/CommentWithAnswers";

interface PostPageProps{
    history: RouteComponentProps["history"]
}


const PostPage = ({history}: PostPageProps) => {
    const dispatch = useAppDispatch()
    const {posts, isLoading, error} = useAppSelector(state=>state.postReducer)
    const {id} =  useParams<{id?: string}>()
    const post = useMemo(()=>{
        return posts.find(e=>(e.id.toString()===id))
    },[])
    const {comments, isLoading: isCommentsLoading, error:commentsError} = useAppSelector(state => state.commentReducer)
    const [applys, setApplys] = useState()

    useEffect(()=>{
        post && dispatch(fetchComments(post.kids))
        return ()=>{
            dispatch(fetchComments([]))
        }
    },[post])

    const clearComments = useMemo(()=>{
        let _comments = comments.filter(e=>e.text)
        _comments = _comments.sort((a,b)=>(a.time-b.time))
        return _comments
    },[comments])

    return (
        <div>
            <h1>{isCommentsLoading ? "0" : "1"}</h1>
            <h1>{comments.length}</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{history.goBack()}}>Go back</button>
            <h1>{post?.title}</h1>
            <br/>
            <br/>
            <div className="container mx-auto px-4 max-w-3xl">
                <ol className={"flex flex-col gap-2"}>
                    {clearComments.map((e)=>(
                        <CommentWithAnswers comment={e}/>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default PostPage;