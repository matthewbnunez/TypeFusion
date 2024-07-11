import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/LandingPage/Dashboard";
import Main from "./pages/Main";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<Dashboard />} path="/" />
                <Route element={<Main />} path="/login" />
            </Routes>
        </div>
    );
}

export default App;
