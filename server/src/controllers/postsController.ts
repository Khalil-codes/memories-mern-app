import { Request, Response } from "express";
import { IPost } from "../types/posts";
import Post from "../models/postModel";

export const getPosts = async (req: Request, res: Response) => {
    try {
        const posts: IPost[] = await Post.find();
        res.status(200).json({
            status: "success",
            result: posts.length,
            data: {
                posts,
            },
        });
    } catch (error: any) {
        res.status(404).json({ status: "fail", message: error.message });
    }
};
export const createPost = async (req: Request, res: Response) => {
    try {
        const post: IPost = await Post.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                post,
            },
        });
    } catch (error: any) {
        res.status(404).json({ status: "fail", message: error.message });
    }
};
