import React, {useEffect, useMemo, useState} from 'react';
import {IComment} from "../models/IComment";
import CommentItem from "./CommentItem";
import {ApiService} from "../API/ApiService";
import CommentAnswerItem from "./CommentAnswerItem";
import {useSortComments} from "../hooks/useSortComments";

interface CommentWithAnswers {
    comment: IComment
}

interface Com {
    parent: IComment
    kids: IComment[]
}



const CommentWithAnswers = ({comment}: CommentWithAnswers) => {
    const [answers, setAnswers] = useState<IComment[]>([])

    const showAnswersButton = async () => {
        setAnswers(await ApiService.getAnswersOnComment(comment))
    }

    const sortedComments = useSortComments(answers)

    return (
        <>
            <CommentItem comment={comment} buttonAction={showAnswersButton}/>
            {sortedComments && sortedComments.map(answer=>{
                if(answer !== comment){
                    return <CommentAnswerItem  comment={answer}/>
                }
            })}
        </>
    );
};

export default CommentWithAnswers;