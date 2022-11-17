import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchComments} from "../../store/redusers/ActionCreators";
import {useSortComments} from "../../hooks/useSortComments";
import CommentItem from "../items/CommentItem";
import AppButton from "../buttons/AppButton";
import {AiOutlineReload} from "react-icons/ai";
import {VscCommentDiscussion} from "react-icons/vsc"
import {ESortBy} from "../../models/ESortBy";
import {BarLoader} from "react-spinners";

type CommentsListProps = {
    commentsIDs: number[],
    updateFunc: ()=>void;
}

const CommentsList:FC<CommentsListProps> = ({commentsIDs, updateFunc}) => {
    const dispatch = useAppDispatch()
    const {comments, isLoading, error} = useAppSelector(state => state.commentReducer)


    useEffect(()=>{
        dispatch(fetchComments(commentsIDs))
    },[commentsIDs])

    const sortedComments = useSortComments(comments, ESortBy.TIME_ASC)

    return (
        <>
            {
                error ? <><h1 className="font-bold text-red-500 text-center">Comments error</h1></>  :
                    <>
                        <div className="flex justify-between text-center items-center h-12">
                            <span className="flex gap-1 items-center dark:text-cyan">{isLoading ? <>...</> : <><VscCommentDiscussion/>{comments.length}</>}</span>
                            <span>{!isLoading && <AppButton onClick={()=>{updateFunc()}}><AiOutlineReload size={"25"}/></AppButton>}</span>
                        </div>

                        {isLoading ? <span className="flex justify-center"><BarLoader color={"#06b6d4"} loading={isLoading}/></span> : <div className="flex flex-col gap-2">
                            {sortedComments.map(e=>(
                                <CommentItem key={e.id} comment={e} level={0}/>
                            ))}
                        </div>}
                    </>
            }
        </>

    );
};

export default CommentsList;