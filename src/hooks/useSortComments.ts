import {useMemo} from "react";
import {IComment} from "../models/IComment";
import {ESortBy} from "../models/ESortBy";


export const useSortComments = (comments:IComment[], sortBy:ESortBy) => {
    return useMemo(() => {
        let _comments = comments.filter(e => e.text)
        switch (sortBy){
            case ESortBy.TIME_ASC:
                return _comments.sort((a, b) => (b.time - a.time))
            case ESortBy.TIME_DESC:
                return _comments.sort((a, b) => (a.time - b.time))
            default:
                return _comments
        }
        // if(comments){
        //
        // }
        // return []
    }, [comments, sortBy]);
}