import React, { useEffect, useState } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import { Row, Col, Label, Input, FormGroup } from "reactstrap";
import axios from "axios";

export const Edit = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    maidenName: "",
    age: "",
    gender: "",
    email: "",
  });

  useEffect(() => {
    axios.get('https://dummyjson.com/users/2')
      .then((res) => {
        setValues({
          ...values,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          maidenName: res.data.maidenName,
          age: res.data.age,
          gender: res.data.gender,
          email: res.data.email,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.put('https://dummyjson.com/users/2', values)
      .then((res) => {
        console.log(res);
        alert("Data Update successfully!");
        navigate("/Profile");
      })
      .catch((err) => console.log(err));
  };

  return (
    <section fluid="md">
      <div className="container">
        <form onSubmit={handleSubmit} className="edit-form">
          <h3>Edit Profile</h3>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Your First Name..."
                  type="text"
                  value={values.firstName}
                  onChange={(e) =>
                    setValues({ ...values, firstName: e.target.value })
                  }
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Your Last Name..."
                  type="text"
                  value={values.lastName}
                  onChange={(e) =>
                    setValues({ ...values, lastName: e.target.value })
                  }
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="maidenName">Maiden Name</Label>
                <Input
                  id="maidenName"
                  name="maidenName"
                  placeholder="Your Maiden Name..."
                  type="text"
                  value={values.maidenName}
                  onChange={(e) =>
                    setValues({ ...values, maidenName: e.target.value })
                  }
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="age">Age</Label>
                <Input
                  id="age"
                  name="age"
                  placeholder="Your Age..."
                  type="number"
                  value={values.age}
                  onChange={(e) =>
                    setValues({ ...values, age: e.target.value })
                  }
                />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email..."
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </FormGroup>
          <button>
            Save
          </button>
        </form>
      </div>
    </section>
  );
};