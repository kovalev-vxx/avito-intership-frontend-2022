import React from 'react';
import {IPost} from "../models/IPost";
import PostItem from "./PostItem";

interface PostListProps {
    posts: IPost[]
}

const PostList = ({posts}: PostListProps) => {
    return (
        <div className="container mx-auto px-4 max-w-3xl">
            <ol className={"flex flex-col gap-2"}>
                {posts.map(post=>(
                    <PostItem post={post} />
                ))}
            </ol>
        </div>
    );
};

export default PostList;