import mongoose from "mongoose";
import { IPost } from "../@types/posts";

const postSchema = new mongoose.Schema(
    {
        title: String,
        message: String,
        author: String,
        authorId: String,
        tags: [String],
        selectedFile: String,
        likes: {
            type: [String],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);
const Post = mongoose.model<IPost>("Post", postSchema);
export default Post;
