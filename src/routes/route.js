import React from "react";
import { Home } from "../component/Home/Home.jsx";
import { Login } from "../component/Login/Login.jsx";
import { Profile } from "../component/Profile/Profile.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Update from "../component/Home/Update.jsx";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
