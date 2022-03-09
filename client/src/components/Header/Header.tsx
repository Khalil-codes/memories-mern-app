import React, { FC } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";

type Props = {};

const Header: FC<Props> = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand className="mx-auto">
                        <h1>Memories</h1>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar" />
                <Navbar.Collapse id="basic-navbar">
                    <Nav className="ms-auto">
                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/register">
                            <Nav.Link>Register</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
