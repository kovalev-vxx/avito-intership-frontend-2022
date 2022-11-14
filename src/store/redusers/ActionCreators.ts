import {AppDispatch} from "../store";
import {postSlice} from "./PostSlice";
import {ApiService} from "../../API/ApiService";

export const fetchPosts = (limit:number=100) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postSlice.actions.postsFetching())
        const posts = await ApiService.getFreshPosts(limit)
        dispatch(postSlice.actions.postsFetchingSuccess(posts))
    } catch (error) {
        dispatch(postSlice.actions.postsFetchingError((error as Error).message))
    }
}