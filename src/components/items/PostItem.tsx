import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import {NavLink} from "react-router-dom";
import {deltaTime} from "../../utils/deltaTime";
import {AiOutlineStar} from "react-icons/ai"
import Item from "./Item";

type PostItem = {
    post: IPost
}


const PostItem:FC<PostItem> = ({post}) => {
    return (
        <Item>
            <NavLink to={`/post/${post.id}`} className={"font-bold text-lightH1Text dark:text-darkH1Text hover:text-cyan dark:hover:text-cyan"}>{post.title}</NavLink>
            <span className="flex text-lightMutedText dark:text-darkMutedText justify-between">
                <span>{deltaTime(post.time)} by <span className="font-bold">{post.by}</span></span>
                <span className="flex items-center gap-1"><AiOutlineStar/>{post.score}</span>
            </span>
        </Item>
    );
};

export default PostItem;