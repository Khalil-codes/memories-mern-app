import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import PostForm from "../components/PostForm/PostForm";
import Posts from "../components/Posts/Posts";

type Props = {};

const Dashboard: FC<Props> = (props) => {
    return (
        <Row xs={1} md={1} lg={1} className="mt-3">
            <Col lg={7}>
                <Posts />
            </Col>
            <Col lg={5}>
                <PostForm />
            </Col>
        </Row>
    );
};

export default Dashboard;
