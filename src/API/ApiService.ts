import axios from "axios";
import {IPost} from "../models/IPost";

const instance = axios.create({
    baseURL: "https://hacker-news.firebaseio.com/v0"
})

export class ApiService{
    static async getFreshPostIDs(limit:number = 100) {
        const response = await instance.get<number[]>("/newstories.json", {
            params:{
                limitToFirst: limit,
                orderBy: "\"$key\""
            }})
        return response.data
    }

    static async getPost(IDs:number){
        const response = await instance.get<IPost>(`/item/${IDs}.json`)
        return response.data
    }

    static async getPosts(IDs:number[]){
        const postsPromises = IDs.map(ID => this.getPost(ID))
        return Promise.all(postsPromises)
    }

    static async getFreshPosts(limit:number=100){
        const ids = this.getFreshPostIDs(limit)
        return this.getPosts(await ids)
    }
}