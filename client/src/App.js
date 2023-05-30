import "./App.css";
import React from "react";
import Main from "./views/Main";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <routes>
        <route element={<Main />} path="/" />
      </routes>
    </div>
  );
}

export default App;
