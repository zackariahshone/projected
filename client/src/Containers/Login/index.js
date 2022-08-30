import React, { useEffect, useRef } from 'react';
import {
  Container,
  Button,
  Form
} from 'react-bootstrap';
import './style.css';
import { useNavigate } from "react-router-dom";

const Login = () => {


  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  }
  const setLogin = () => {
    //set redux and or context to user logged in
  }

  return (
    <Container>
      <div className='loginContainer'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              handleClick()
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  )
}

export default Login;