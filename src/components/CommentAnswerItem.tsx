import React from 'react';
import {IComment} from "../models/IComment";
import parse from "html-react-parser";
import CommentItem from "./CommentItem";

interface CommentAnswerItem {
    comment: IComment
}

const CommentAnswerItem = ({comment}: CommentAnswerItem) => {
    return (
        <div className="border-2 rounded-sm flex flex-col">
            <b>{comment.by}</b>
            <span>{parse(`${comment.text}`)}</span>
        </div>
    );
};

export default CommentAnswerItem;