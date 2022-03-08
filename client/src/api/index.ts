import axios from "axios";

const url = "http://localhost:5000/api/posts";
export const getPosts = () => axios.get(url);
export const createPost = (postData: any) => axios.post(url, postData);
export const updatePost = (id: string, updatedPostData: any) =>
    axios.patch(`${url}/${id}`, updatedPostData);
export const deletePost = (id: string) => axios.delete(`${url}/${id}`);
