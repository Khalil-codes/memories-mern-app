import React, { FC } from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../redux/postSlice";
import { IPost } from "../../../types";
import PostAction from "./PostAction";
import PostBadges from "./PostBadges";
import PostOverlay from "./PostOverlay";

interface Props {
    post: IPost;
}

const Post: FC<Props> = ({ post }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        console.log(post._id);
        try {
            dispatch(deletePost(post._id));
        } catch (error: any) {
            console.log(error.message);
        }
    };
    const handleLike = () => {
        console.log(post._id, "Called");
        try {
            dispatch(likePost(post._id));
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Card>
            <Card.Img
                variant="top"
                src={post.selectedFile}
                style={{ height: "190px", objectFit: "cover" }}
            />
            <PostOverlay author={post.author} createdAt={post.createdAt} />
            <Card.Body style={{ zIndex: 10 }}>
                <PostBadges tags={post.tags} />
                <Card.Title
                    style={{
                        fontWeight: 400,
                        marginTop: "10px",
                    }}>
                    {post.title}
                </Card.Title>
                <Card.Text>{post.message}</Card.Text>
                <PostAction
                    handleDelete={handleDelete}
                    handleLike={handleLike}
                    likeCount={post.likeCount}
                />
            </Card.Body>
        </Card>
    );
};

export default Post;
