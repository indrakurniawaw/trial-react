import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/home">
        <button>go home</button>
      </Link>
    </div>
  );
};
