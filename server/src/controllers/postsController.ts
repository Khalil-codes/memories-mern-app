import { Request, Response } from "express";
import { IPost } from "../types/posts";
import Post from "../models/postModel";
import mongoose from "mongoose";

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
        const postData = {
            ...req.body,
            tags: req.body.tags.split(",").map((tag: string) => tag.trim()),
        };
        const post: IPost = await Post.create(postData);
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

export const updatePost = async (req: Request, res: Response) => {
    try {
        const post = await Post.findById(req.params.id);
        const updatedPostData = {
            ...req.body,
            tags: req.body.tags.split(",").map((tag: string) => tag.trim()),
        };
        if (!post) {
            res.status(404).json({ status: "fail", message: "Post not Found" });
        }
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            updatedPostData
        );
        res.status(201).json({
            status: "success",
            data: {
                post: updatedPost,
            },
        });
    } catch (error: any) {
        res.status(404).json({ status: "fail", message: error.message });
    }
};

export const deletePost = async (req: Request, res: Response) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            res.status(404).json({ status: "fail", message: "Post not Found" });
        }
        await Post.findByIdAndDelete(req.params.id);
        console.log(req.params.id);
        res.status(200).json({
            status: "success",
            data: {
                id: req.params.id,
            },
        });
    } catch (error: any) {
        res.status(404).json({ status: "fail", message: error.message });
    }
};

export const likePost = async (req: Request, res: Response) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            res.status(404).json({ status: "fail", message: "Post not Found" });
        } else {
            const updatedPost = await Post.findByIdAndUpdate(
                req.params.id,
                { likeCount: post?.likeCount + 1 },
                { new: true }
            );
            res.status(201).json({
                status: "success",
                data: {
                    post: updatedPost,
                },
            });
        }
    } catch (error: any) {
        res.status(404).json({ status: "fail", message: error.message });
    }
};
