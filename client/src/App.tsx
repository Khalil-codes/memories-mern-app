import React, { FC } from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App: FC = () => {
    return (
        <>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Container>
        </>
    );
};

export default App;
