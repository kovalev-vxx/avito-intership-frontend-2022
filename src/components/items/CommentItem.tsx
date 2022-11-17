import {IComment} from "../../models/IComment";
import React, {FC, useEffect, useMemo, useState} from 'react';
import parse from "html-react-parser";
import {deltaTime} from "../../utils/deltaTime";
import Item from "./Item";
import {ApiService} from "../../API/ApiService";
import AppButton from "../buttons/AppButton";
import {VscCommentDiscussion} from "react-icons/vsc"
import {useSortComments} from "../../hooks/useSortComments";
import {ESortBy} from "../../models/ESortBy";

type CommentItem = {
    comment: IComment,
    level: number,
}


const CommentItem:FC<CommentItem> = ({comment, level}) => {
    const [showAnswers, setShowAnswers] = useState<boolean>(false)
    const [answers, setAnswers] = useState<IComment[]>([])

    useEffect(()=>{
        const fetchAnswers = async() => {
            try{
                const _answers = await ApiService.getComments(comment.kids)
                setAnswers(_answers)
            } catch (e){
                setShowAnswers(false)
            }
        }
        if(showAnswers){
            fetchAnswers()
        } else {
            setAnswers([])
        }
    }, [showAnswers, comment.kids])

    const containerStyle = useMemo(()=>{
        if(level>0){
            return "p-0 pl-4 pr-2 py-2 rounded-t-none relative"
        }
        return "p-0 pl-4 pr-2 py-2 relative"
    }, [level])

    const sortedAnswers = useSortComments(answers, ESortBy.TIME_DESC)


    return (
        <Item className={containerStyle}>
            <div className="flex items-center justify-between border-b-2 border-lightBorder dark:border-darkBorder">
                <span className="font-bold text-lightH1Text dark:text-darkH1Text">{comment.by}</span>
                <span className="text-lightMutedText dark:text-darkMutedText">{deltaTime(comment.time)}</span>
            </div>
            <div id="comment-text" className="text-sm py-2 text-lightMutedText dark:text-darkMutedText">{parse(`${comment.text}`)}</div>

            <div className="flex justify-end mb-2">
                {
                    comment?.kids && <AppButton className="text-sm" onClick={()=>{setShowAnswers(!showAnswers)}}>{showAnswers ? "Hide" : <span className="flex gap-1 items-center"><VscCommentDiscussion/>{comment.kids.length}</span>}</AppButton>
                }
            </div>

            <div className="flex flex-col gap-2">
                {
                    sortedAnswers?.length ? sortedAnswers.map(com=>{
                        return <CommentItem key={com.id}  comment={com} level={level+1}/>
                    }) : null
                }
            </div>


        </Item>
    );
};

export default CommentItem;