import axios from "axios";

const url = "http://localhost:5000/api/posts";

// Get all Post
export const getPosts = () => axios.get(url);

// Create Post
export const createPost = (postData: any) => axios.post(url, postData);

// Update Post
export const updatePost = (id: string, updatedPostData: any) =>
    axios.patch(`${url}/${id}`, updatedPostData);

// Delete Post
export const deletePost = (id: string) => axios.delete(`${url}/${id}`);
