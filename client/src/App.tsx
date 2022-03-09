import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useAuth } from "./redux/store";

const App: FC = () => {
    const { user } = useAuth();

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
