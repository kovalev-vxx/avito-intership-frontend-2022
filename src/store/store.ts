import {combineReducers, configureStore, createStore} from "@reduxjs/toolkit";
import {postAPI} from "./news/PostService";
import {postReducer} from "./redusers/PostSlice"
import {commentReducer} from "./redusers/CommentSlice";


const rootReducer = combineReducers({
    [postAPI.reducerPath]: postAPI.reducer,
    postReducer,
    commentReducer
})

export const setupStore = () => {
    return configureStore({
        reducer:rootReducer,
        middleware: (getDefaultMiddleware)=>
            getDefaultMiddleware().concat(postAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

