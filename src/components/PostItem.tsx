import React from 'react';
import {IPost} from "../models/IPost";
import {NavLink} from "react-router-dom";
import {deltaTime} from "../utils/deltaTime";
import {AiOutlineStar} from "react-icons/ai"

interface PostItem{
    post: IPost,
}


const PostItem = ({post}: PostItem,) => {
    return (
        <li className={"p-2 border border-lightBorder dark:border-darkBorder dark:border-darkBorder rounded-md flex flex-col justify-between h-20 dark:bg-darkElement bg-lightElement"}>
            <NavLink to={`/post/${post.id}`} className={"font-bold text-lightH1Text dark:text-darkH1Text hover:text-cyan dark:hover:text-cyan"}>{post.title}</NavLink>
            <span className="flex text-lightMutedText justify-between">
                <span>{deltaTime(post.time)} by <span className="font-bold">{post.by}</span></span>
                <span className="flex items-center gap-1"><AiOutlineStar/>{post.score}</span>
            </span>
        </li>
    );
};

export default PostItem;