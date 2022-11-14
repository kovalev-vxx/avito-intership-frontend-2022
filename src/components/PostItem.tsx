import React from 'react';
import {IPost} from "../models/IPost";

interface PostItem{
    post: IPost
}

const PostItem = ({post}: PostItem) => {
    return (
        <li className={"border-2 rounded-sm flex flex-col justify-between h-20"}>
            <h1 className={"font-bold"}>{post.title}</h1>
            <span className="flex">{post.score} {post.time} {post.by}</span>
        </li>
    );
};

export default PostItem;