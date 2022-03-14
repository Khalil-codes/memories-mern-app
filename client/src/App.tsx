import jwtDecode from "jwt-decode";
import React, { FC, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { logoutUser } from "./redux/authSlice";
import { useAuth } from "./redux/store";

const App: FC = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();
    useEffect(() => {
        const decoded: any = jwtDecode(user?.token as string);
        if (decoded?.exp * 1000 < new Date().getTime()) dispatch(logoutUser());
    }, []);
    return (
        <>
            <Header />
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            user ? <Dashboard /> : <Navigate to="/login" />
                        }
                    />
                    <Route
                        path="/login"
                        element={!user ? <Login /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/register"
                        element={!user ? <Register /> : <Navigate to="/" />}
                    />
                </Routes>
            </Container>
        </>
    );
};

export default App;
