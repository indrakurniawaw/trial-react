import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    });
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
