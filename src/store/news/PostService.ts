import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPost} from "../../models/IPost";

export const postAPI = createApi({
    reducerPath: "postAPI",
    baseQuery: fetchBaseQuery({baseUrl:"https://hacker-news.firebaseio.com/v0"}),
    endpoints:(build)=>({
        fetchNewPostIDs: build.query<number[], number>({
            query: (limit:number = 100)=> ({
                url: "/newstories.json",
                params:{
                    limitToFirst: limit,
                    "orderBy": "\"$key\""
                }
            })
        }),
        fetchPost: build.query<IPost, number>({
            query:(ID:number)=>({
                url: `/item/${ID}.json`
            })
        })
    })
})