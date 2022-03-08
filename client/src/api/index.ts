import axios from "axios";
import { IPostClient } from "../types";

const url = "http://localhost:5000/api/posts";

// Get all Post
export const getPosts = () => axios.get(url);

// Create Post
export const createPost = (postData: IPostClient) => axios.post(url, postData);

// Update Post
export const updatePost = (id: string, updatedPostData: IPostClient) => {
    console.log(id, updatedPostData);
    return axios.patch(`${url}/${id}`, updatedPostData);
};

// Delete Post
export const deletePost = (id: string) => axios.delete(`${url}/${id}`);
