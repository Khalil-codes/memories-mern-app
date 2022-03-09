import React, { FC } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";
import Avatar from "react-avatar";
import { useAuth } from "../../redux/store";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/authSlice";

type Props = {};

const Header: FC<Props> = (props) => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const handleLogout = () => {
        try {
            dispatch(logoutUser());
        } catch (error) {
            console.log(error);
        }
    };
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
                                    {user?.user?.imageUrl ? (
                                        <img
                                            src={user.user.imageUrl}
                                            alt="user-img"
                                            width={40}
                                            height={40}
                                            style={{ borderRadius: "50%" }}
                                        />
                                    ) : (
                                        <Avatar
                                            name={user?.user?.name}
                                            size="40"
                                            round={true}
                                            textSizeRatio={1.5}
                                        />
                                    )}
                                    <Navbar.Text className="ms-2">
                                        {user?.user?.name}
                                    </Navbar.Text>
                                </div>
                                <Nav.Link
                                    className="btn btn-light text-dark"
                                    onClick={handleLogout}>
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
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
