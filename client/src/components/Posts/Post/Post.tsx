import moment from "moment";
import React, { FC } from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { FaTrash, FaThumbsUp, FaEdit } from "react-icons/fa";
import { IPost } from "../../../types";

interface Props {
    post: IPost;
}

const getRandomBadge = () => {
    const bg = ["primary", "secondary", "success", "dark"];
    return bg[Math.trunc(Math.random() * bg.length) + 1];
};

const Post: FC<Props> = ({ post }) => {
    const handleDelete = () => {
        console.log(post._id);
    };
    return (
        <Card>
            <Card.Img variant="top" src={post.selectedFile} />
            <Card.ImgOverlay>
                <Card.Title
                    style={{
                        color: "#fff",
                        fontWeight: 400,
                    }}>
                    {post.title}
                </Card.Title>
                <Card.Subtitle
                    style={{
                        color: "#fff",
                        fontWeight: 400,
                        fontSize: "0.9rem",
                    }}>
                    -{post.creator}, {moment(post.createdAt).fromNow()}
                </Card.Subtitle>
            </Card.ImgOverlay>
            <Card.Body>
                <div className="mb-2">
                    {post.tags.map((tag) => (
                        <Badge
                            key={tag}
                            bg={getRandomBadge()}
                            style={{ opacity: 0.7 }}
                            className="me-1">
                            # {tag}
                        </Badge>
                    ))}
                </div>
                <Card.Text>{post.message}</Card.Text>
                <Row>
                    <Col xs={6}>
                        <Button variant="primary">
                            <FaThumbsUp /> 0
                        </Button>
                    </Col>
                    <Col xs={6} className="text-end">
                        <Button variant="warning" className="me-1">
                            <FaEdit />
                        </Button>
                        <Button variant="danger" onClick={handleDelete}>
                            <FaTrash />
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Post;
