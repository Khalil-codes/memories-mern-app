import React, { FC } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { FaEdit, FaThumbsUp, FaTrash } from "react-icons/fa";

type Props = {
    likeCount: number;
    handleDelete: () => void;
    handleLike: () => void;
};

const PostAction: FC<Props> = ({ handleDelete, handleLike, likeCount }) => {
    return (
        <Row>
            <Col xs={6}>
                <Button variant="primary" onClick={handleLike}>
                    <FaThumbsUp /> {likeCount}
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
    );
};

export default PostAction;
