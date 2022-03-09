import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { Button, Card, Form, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

type Props = {};

const Register: FC<Props> = (props) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");

    const [isFilled, setIsFilled] = useState(false);
    useEffect(() => {
        if (email && password && name && password2) setIsFilled(true);
    }, [email, password, name, password2]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password, name);
    };
    return (
        <Card className="d-flex justify-content-center align-items-center auth-form-container">
            <Form
                className="auth-form"
                autoComplete="false"
                onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setName(e.target.value)
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setEmail(e.target.value)
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setPassword(e.target.value)
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        value={password2}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setPassword2(e.target.value)
                        }
                    />
                    <Form.Text>Re-enter your password to confirm</Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!isFilled}>
                    Submit
                </Button>
                <hr />
                Already have an Account?&nbsp;
                <Link to="/login">Login Here</Link>
            </Form>
        </Card>
    );
};

export default Register;
