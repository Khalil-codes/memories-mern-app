import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

type Props = {};

const Login: FC<Props> = (props) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isFilled, setIsFilled] = useState(false);
    useEffect(() => {
        if (email && password) setIsFilled(true);
    }, [email, password]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password);
    };
    return (
        <Card className="d-flex justify-content-center align-items-center auth-form-container">
            <Form
                className="auth-form"
                autoComplete="false"
                onSubmit={handleSubmit}>
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
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
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
                <Button variant="primary" type="submit" disabled={!isFilled}>
                    Login
                </Button>
                <hr />
                Don't have an Account?&nbsp;
                <Link to="/register">Register Here</Link>
            </Form>
        </Card>
    );
};

export default Login;
