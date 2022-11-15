import {IComment} from "../../models/IComment";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CommentState {
    comments: IComment[],
    isLoading: boolean,
    error: string
}

const initialState: CommentState = {
    comments: [],
    isLoading: false,
    error: ""
}

export const commentSlice = createSlice ({
    name:"comment",
    initialState,
    reducers:{
        commentsFetching(state){
            state.isLoading = true
        },
        commentsFetchingSuccess(state, action: PayloadAction<IComment[]>){
            state.isLoading = false;
            state.error = ""
            state.comments = action.payload
        },
        commentsFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const commentReducer = commentSlice.reducer