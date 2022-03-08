import React, { FC } from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../redux/postSlice";
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
            console.log(error.message, "here");
        }
    };
    return (
        <Card>
            <Card.Img variant="top" src={post.selectedFile} />
            <PostOverlay
                title={post.title}
                creator={post.creator}
                createdAt={post.createdAt}
            />
            <Card.Body style={{ zIndex: 10 }}>
                <PostBadges tags={post.tags} />
                <Card.Text>{post.message}</Card.Text>
                <PostAction handleDelete={handleDelete} />
            </Card.Body>
        </Card>
    );
};

export default Post;
