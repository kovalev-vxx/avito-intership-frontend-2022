import {IComment} from "../models/IComment";
import React from 'react';
import parse from "html-react-parser";
import {deltaTime} from "../utils/deltaTime";

interface CommentItem {
    comment: IComment
    buttonAction: ()=>void;
}

const CommentItem = ({comment, buttonAction}: CommentItem) => {
    return (
        <div className="border-2 rounded-sm flex flex-col dark:bg-darkElement bg-lightElement">
            <b>{comment.by}</b>
            <span>{parse(`${comment.text}`)}</span>
            <span>{deltaTime(comment.time)}</span>
            {buttonAction && <button onClick={buttonAction}>Show Answers</button>}
        </div>
    );
};

export default CommentItem;