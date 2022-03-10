import axios from "axios";
import { ICred, IPostClient, IUserData } from "../types";

const postsUrl = "http://localhost:5000/api/posts";
const authUrl = "http://localhost:5000/api/user";

// Get all Post
export const getPosts = () => axios.get(postsUrl);

// Create Post
export const createPost = (postData: IPostClient) =>
    axios.post(postsUrl, postData);

// Update Post
export const updatePost = (id: string, updatedPostData: IPostClient) => {
    console.log(id, updatedPostData);
    return axios.patch(`${postsUrl}/${id}`, updatedPostData);
};

// Delete Post
export const deletePost = (id: string) => axios.delete(`${postsUrl}/${id}`);

// Like Post
export const likePost = (id: string) => axios.patch(`${postsUrl}/${id}/like`);

// User Authentication
export const loginUser = (credentials: ICred) =>
    axios.post(`${authUrl}/login`, credentials);

// Register User
export const registerUser = (userData: IUserData) =>
    axios.post(authUrl, userData);
