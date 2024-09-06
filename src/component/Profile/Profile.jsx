import React, { useEffect, useState } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal"; 
import { Row, Col, Label, Input, FormGroup } from "reactstrap";

export const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    maidenName: "",
    age: "",
    email: "",
  });

  useEffect(() => {
    fetch("https://dummyjson.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setValues({
          firstName: data.firstName,
          lastName: data.lastName,
          maidenName: data.maidenName,
          age: data.age,
          email: data.email,
        });
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://dummyjson.com/users/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        closeModal(); 
      });
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section>
      <div className="container">
        <div className="profile-content">
          <h4 className="profile-title">Profile</h4>
          <h6>First Name: {user.firstName}</h6>
          <h6>Last Name: {user.lastName}</h6>
          <h6>Maiden Name: {user.maidenName}</h6>
          <h6>Age: {user.age}</h6>
          <h6>Gender: {user.gender}</h6>
          <h6>Email: {user.email}</h6>
          <button onClick={openModal}>Edit</button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="edit-modal"
            overlayClassName="edit-modal-overlay"
          >
            <div>
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
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
                  />
                </FormGroup>
                <button type="submit">Save</button>
                <button onClick={closeModal} type="button">
                  Cancel
                </button>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    </section>
  );
};
