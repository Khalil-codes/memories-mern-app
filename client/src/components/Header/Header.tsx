import React, { FC, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";
import Avatar from "react-avatar";

type Props = {};

const Header: FC<Props> = (props) => {
    const [user, setUser] = useState(true);
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
                        {user ? (
                            <>
                                <div className="user-info me-4 d-flex justify-content-center align-items-center h-100">
                                    <Avatar
                                        name="Khalil Patiwala"
                                        size="30"
                                        round={true}
                                        textSizeRatio={1.5}
                                    />
                                    <Navbar.Text className="ms-2">
                                        Khalil Patiwala
                                    </Navbar.Text>
                                </div>
                                <Nav.Link
                                    className="btn btn-light text-dark"
                                    onClick={() => setUser(false)}>
                                    Logout
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                                <LinkContainer to="/login">
                                    <Nav.Link>Login</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/register">
                                    <Nav.Link>Register</Nav.Link>
                                </LinkContainer>

                                <Nav.Link
                                    className="btn btn-light text-dark"
                                    onClick={() => setUser(true)}>
                                    Login
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
