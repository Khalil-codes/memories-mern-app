import mongoose from "mongoose";
import { IPost } from "../@types/posts";

const postSchema = new mongoose.Schema(
    {
        title: String,
        message: String,
        creator: String,
        tags: [String],
        selectedFile: String,
        likeCount: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model<IPost>("Post", postSchema);
export default Post;
