import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoogleAuth from "../components/GoogleAuth/GoogleAuth";
import FormInput from "../components/UI/FormInput";
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
                <FormInput
                    label="Email Address"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                    }
                    helpText="We'll never share your email with anyone else."
                />
                <FormInput
                    label="Password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                    }
                />
                <div className="d-grid">
                    <Button
                        variant="primary"
                        type="submit"
                        disabled={!isFilled}>
                        Login
                    </Button>
                </div>
                <div className="or-separator">Or</div>
                <GoogleAuth />
                <hr />
                Don't have an Account?&nbsp;
                <Link to="/register">Register Here</Link>
            </Form>
        </Card>
    );
};

export default Login;
