import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
      
    });
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <Link to="/profile">
        <button>go profile</button>
      </Link>
    </div>
  );
};
