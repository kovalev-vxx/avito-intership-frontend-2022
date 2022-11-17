import React, {useEffect, useMemo, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppSelector} from "../hooks/redux";
import { RouteComponentProps } from 'react-router-dom';
import AppButton from "../components/buttons/AppButton";
import {IoIosArrowBack} from "react-icons/io"
import PostItem from "../components/items/PostItem";
import ReadLink from "../components/buttons/ReadLink";
import CommentsList from "../components/lists/CommentsList";
import {IPost} from "../models/IPost";
import {ApiService} from "../API/ApiService";
import BasePage from "./BasePage";

interface PostPageProps{
    history: RouteComponentProps["history"]
}


const PostPage = ({history}: PostPageProps) => {
    const {posts} = useAppSelector(state=>state.postReducer)
    const {id} =  useParams<{id?: string}>()
    const [post, setPost] = useState<IPost>()
    const [error, setError] = useState<string>("")

    useMemo(()=>{
        setPost(posts.find(e=>(e.id.toString()===id)))
    },[posts, id])

    const fetchPost = async () => {
        try {
            setPost(await ApiService.getPost(Number(id)))
        } catch (e) {
            setError("News not found")
        }

    }

    useEffect(()=>{
        if(!post){
            fetchPost()
        }
    },[post])

    return (
        <BasePage>
            <div className="flex justify-between items-center h-12">
                <AppButton onClick={()=>{history.goBack()}}><IoIosArrowBack/></AppButton>
                {post?.url && <ReadLink href={post.url}/>}
            </div>
            {error ? <><h1 className="font-bold text-red-500 text-center">News not found</h1></> :
                    <>
                        {post && <PostItem post={post}/>}
                        {post && <CommentsList updateFunc={fetchPost} commentsIDs={post.kids}/>}
                    </>
            }

        </BasePage>
    );
};

export default PostPage;