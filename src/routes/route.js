import React from "react";
import { Home } from "../component/Home/Home.jsx";
import { Login } from "../component/Login/Login.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
