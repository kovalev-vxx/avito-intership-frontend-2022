import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {postReducer} from "./redusers/PostSlice"
import {commentReducer} from "./redusers/CommentSlice";


const rootReducer = combineReducers({
    postReducer,
    commentReducer
})

export const setupStore = () => {
    return configureStore({
        reducer:rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

