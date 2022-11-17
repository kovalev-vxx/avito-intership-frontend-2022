import {AppDispatch} from "../store";
import {postSlice} from "./PostSlice";
import {ApiService} from "../../API/ApiService";
import {IPost} from "../../models/IPost";
import {commentSlice} from "./CommentSlice";


export const fetchPosts = (limit:number=100, currentPosts:IPost[]) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postSlice.actions.postsFetching())
        const currentsIds = currentPosts.map(e=>e.id)
        let freshIDs = await ApiService.getFreshPostIDs(limit)
        freshIDs = freshIDs.filter(e=>!currentsIds.includes(e))
        const freshPosts = await ApiService.getPosts(freshIDs)
        const posts = [...freshPosts, ...currentPosts].slice(0, limit)
        dispatch(postSlice.actions.postsFetchingSuccess(posts))
    } catch (error) {
        dispatch(postSlice.actions.postsFetchingError((error as Error).message))
    }
}

export const fetchComments = (IDs:number[]) => async (dispatch: AppDispatch) => {
    try {
        dispatch(commentSlice.actions.commentsFetching())
        const comments = await ApiService.getComments(IDs)
        dispatch(commentSlice.actions.commentsFetchingSuccess(comments))
    } catch (error) {
        dispatch(commentSlice.actions.commentsFetchingError((error as Error).message))
    }
}