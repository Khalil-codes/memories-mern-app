import React, { FC } from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import PostForm from "./components/PostForm/PostForm";
import Posts from "./components/Posts/Posts";

const App: FC = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="mx-auto">
                        <h1>Memories</h1>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Container className="mt-3">
                <Row xs={1} md={1} lg={1}>
                    <Col lg={7}>
                        <Posts />
                    </Col>
                    <Col lg={5}>
                        <PostForm />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;
