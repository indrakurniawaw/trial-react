import React,{ useEffect, useState } from "react";
import "./profile.css";
import { useNavigate, Link } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('https://dummyjson.com/users/1')
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <section>
      <div className="container">
        <div className="profile-content">
            <div>
              <h4 className="profile-title">Profile</h4>
              <h6>First Name: {user.firstName}</h6>
              <h6>Last Name: {user.lastName}</h6>
              <h6>Maiden Name: {user.maidenName}</h6>
              <h6>Age: {user.age}</h6>
              <h6>Gender: {user.gender}</h6>
              <h6>Email: {user.email}</h6>
              <Link to="/edit">
                <button>
                  Edit
                </button>{" "}
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
};
