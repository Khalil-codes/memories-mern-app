import mongoose from "mongoose";
import { IPost } from "../@types/posts";

const postSchema = new mongoose.Schema(
    {
        title: String,
        message: String,
        author: String,
        authorId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        tags: [String],
        selectedFile: String,
        likeCount: {
            type: Number,
            default: 0,
        },
        likes: {
            type: [String],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);
postSchema.pre("save", function (next) {
    this.likeCount = this.likes.length;
    next();
});
const Post = mongoose.model<IPost>("Post", postSchema);
export default Post;
