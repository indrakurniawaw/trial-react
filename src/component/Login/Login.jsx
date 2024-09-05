import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { Link } from "react-router-dom";
import './Login.css';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Invalid user id');
      return;
    }

    try {
      const response = await fetch("https://dummyjson.com/user/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        setIsLoggedIn(true);
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login');
    }
  };

  useEffect(() => {
  }, []);

  return (
    <div className="card">
      <h1>Login</h1>
      {error && <Alert color="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            id="username"
            name="username"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input type="checkbox" /> Remember me
          </Label>
        </FormGroup>
        <Button color="primary">
          Login {isLoggedIn && <Link to="/home">Login</Link>}
        </Button>
        {/* <p class="signup-link">
          No account?
          <a href="">Sign up</a>
        </p> */}
      </Form>
    </div>
  );
};

export default Login;