import React, { FC } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { FaEdit, FaThumbsUp, FaTrash } from "react-icons/fa";

type Props = {
    likeCount: number;
    userLiked: boolean;
    handleDelete: () => void;
    handleLike: () => void;
};

const renderLikeButton = (
    likeCount: number,
    userLiked: boolean,
    handleLike: () => void
) => {
    if (userLiked) {
        return (
            <div className="d-flex align-items-center">
                <Button variant="primary" onClick={handleLike}>
                    <FaThumbsUp /> {likeCount}
                </Button>
                <div className="text-muted ms-2">
                    {likeCount > 2 && `You and ${likeCount - 1} others`}
                </div>
            </div>
        );
    }
    return (
        <>
            <Button variant="outline-primary" onClick={handleLike}>
                <FaThumbsUp /> {likeCount}
            </Button>
        </>
    );
};

const PostAction: FC<Props> = ({
    handleDelete,
    handleLike,
    likeCount,
    userLiked,
}) => {
    return (
        <Row>
            <Col xs={6}>
                {renderLikeButton(likeCount, userLiked, handleLike)}
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
    );
};

export default PostAction;
