import React, { FC } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { FaEdit, FaThumbsUp, FaTrash } from "react-icons/fa";

type Props = {
    handleDelete: () => void;
};

const PostAction: FC<Props> = ({ handleDelete }) => {
    return (
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
    );
};

export default PostAction;
