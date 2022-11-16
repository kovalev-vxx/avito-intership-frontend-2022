import {IComment} from "../models/IComment";
import React, {useEffect, useRef, useState} from 'react';
import parse, {Comment} from "html-react-parser";
import {deltaTime} from "../utils/deltaTime";
import Item from "./Item";
import {ApiService} from "../API/ApiService";

interface CommentItem {
    comment: IComment
}


const CommentItem = ({comment}: CommentItem) => {
    const [showAnswers, setShowAnswers] = useState<boolean>(false)
    const [answers, setAnswers] = useState<IComment[]>()

    useEffect(()=>{
        const fetchAnswers = async() => {
            const _answers = await ApiService.getComments(comment.kids)
            setAnswers(_answers)
        }
        if(showAnswers){
            fetchAnswers()
        } else {
            setAnswers([])
        }
    }, [showAnswers])

    return (
        <Item>
            <b>{comment.by}</b>
            <span id="comment-text">{parse(`${comment.text}`)}</span>
            <span>{deltaTime(comment.time)}</span>
            {
                comment?.kids && <button onClick={()=>{setShowAnswers(!showAnswers)}}>{showAnswers ? "Hide" : "Show Answers"}</button>
            }

            {
                answers?.length ? answers.map(com=>{
                    return <CommentItem comment={com}/>
                }) : null
            }

        </Item>
    );
};

export default CommentItem;