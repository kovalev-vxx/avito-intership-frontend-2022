import React, {useEffect, useMemo, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import { RouteComponentProps } from 'react-router-dom';
import {fetchComments} from "../store/redusers/ActionCreators";
import CommentWithAnswers from "../components/CommentWithAnswers";
import AppButton from "../components/AppButton";
import {IoIosArrowBack} from "react-icons/io"
import PostItem from "../components/PostItem";
import ReadLink from "../components/ReadLink";
import SortSelector from "../components/SortSelector";
import {BarLoader} from "react-spinners";
import {AiOutlineReload} from "react-icons/ai";

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
        <div className="container mx-auto px-4 max-w-3xl flex flex-col gap-2">
            <div className="flex justify-between items-center h-12">
                <AppButton onClick={()=>{history.goBack()}}><IoIosArrowBack/></AppButton>
                {post?.url && <ReadLink href={post.url}/>}
            </div>
            {post && <PostItem post={post}/>}
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