import axios from "axios";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

const instance = axios.create({
    baseURL: "https://hacker-news.firebaseio.com/v0"
})

export class ApiService{
    static async getFreshPostIDs(limit:number = 100):Promise<number[]> {
        const response = await instance.get<number[]>("/newstories.json", {
            params:{
                limitToFirst: limit,
                orderBy: "\"$key\""
            }})
        return response.data
    }

    static async getPost(ID:number):Promise<IPost>{
        const response = await instance.get(`/item/${ID}.json`)
        if(response.data === null){
            throw new Error("Post is empty")
        }
        return response.data
    }

    static async getPosts(IDs:number[]):Promise<IPost[]>{
        const postsPromises = IDs.map(ID => this.getPost(ID))
        return Promise.all(postsPromises)
    }

    static async getFreshPosts(limit:number=100):Promise<IPost[]>{
        const ids = this.getFreshPostIDs(limit)
        return this.getPosts(await ids)
    }

    static async getComment(ID:number):Promise<IComment>{
        const response = await instance.get(`/item/${ID}.json`)
        return response.data
    }

    static async getComments(IDs:number[]):Promise<IComment[]>{
        const commentsPromises = IDs.map(ID => this.getComment(ID))
        return Promise.all(commentsPromises)
    }

    static async getAnswersOnComment(comment:IComment):Promise<IComment[]>{
        const comments = [] as IComment[]
        const dfs = async (comment: IComment) => {
            comments.push(comment)
            if (!comment.kids) {
                return
            }
            const kids = await this.getComments(comment.kids)
            kids.forEach(dfs)
        }
        await dfs(comment)
        return comments
    }
}
