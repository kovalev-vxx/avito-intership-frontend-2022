import {useMemo} from "react";
import {IComment} from "../models/IComment";

export const useSortComments = (comments:IComment[]) => {
    return useMemo(() => {
        let _comments = comments.filter(e => e.text)
        _comments = _comments.sort((a, b) => (a.time - b.time))
        return _comments
    }, [comments]);
}