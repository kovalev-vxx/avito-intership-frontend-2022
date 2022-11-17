import {useMemo} from "react";
import {IPost} from "../models/IPost";
import {ESortBy} from "../models/ESortBy";

export const useSortPosts = (posts:IPost[], sortBy:number) => {
    return useMemo(() => {
        const _posts = [...posts]
        switch (sortBy){
            case(ESortBy.TIME_ASC):
                return _posts.sort((a, b) => (b.time - a.time))
            case(ESortBy.TIME_DESC):
                return _posts.sort((a, b) => (a.time - b.time))
            case(ESortBy.SCORE_ASC):
                return _posts.sort((a, b) => (a.score - b.score))
            case(ESortBy.SCORE_DESC):
                return _posts.sort((a, b) => (b.score - a.score))
            default:
                return posts
        }
    }, [posts, sortBy]);
}