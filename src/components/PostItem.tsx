import React from 'react';
import {IPost} from "../models/IPost";
import {NavLink} from "react-router-dom";

interface PostItem{
    post: IPost,
}

const PostItem = ({post}: PostItem,) => {
    return (
        <li className={"border-2 rounded-sm flex flex-col justify-between h-20"}>
            <NavLink to={`/post/${post.id}`} className={"font-bold"}>{post.title}</NavLink>
            <span className="flex">{post.score} {post.time} {post.by}</span>
        </li>
    );
};

export default PostItem;