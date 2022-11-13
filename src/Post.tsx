import React from 'react';
import {postAPI} from "./store/news/PostService";

type PostProps = {
    ID: number,
}

const Post = ({ID}: PostProps) => {
    const {data:post} = postAPI.useFetchPostQuery(ID)
    return (
        <div>
            {post && post.title}
        </div>
    );
};

export default Post;