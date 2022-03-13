import axios, { AxiosRequestConfig } from "axios";
import { ICred, IPostClient, IUserData } from "../types";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

API.interceptors.request.use((config: AxiosRequestConfig) => {
    if (localStorage.getItem("user")) {
        config.headers = {
            Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("user") as string).token
            }`,
        };
    }
    return config;
});
// Get all Post
export const getPosts = (token: string) => API.get("/posts");

// Create Post
export const createPost = (postData: IPostClient) =>
    API.post("/posts", postData);

// Update Post
export const updatePost = (id: string, updatedPostData: IPostClient) => {
    console.log(id, updatedPostData);
    return API.patch(`/posts/${id}`, updatedPostData);
};

// Delete Post
export const deletePost = (id: string) => axios.delete(`/posts/${id}`);

// Like Post
export const likePost = (id: string, token: string) =>
    API.patch(`/posts/${id}/like`, {});

// User Authentication
export const loginUser = (credentials: ICred) =>
    API.post(`/user/login`, credentials);

// Register User
export const registerUser = (userData: IUserData) =>
    API.post("/user", userData);
