import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Button,
  Form
} from 'react-bootstrap';
import { login, logout, isLoggedIn } from '../../appstore/Reducers/UserReducers';
import './style.css';
import { useNavigate } from "react-router-dom";
const Login = () => {

  // may remove signIn/setSignIn 
  const [userCred, setUserCred] = useState();
  const [signIn, setSignIn] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedInStatus = useSelector(isLoggedIn);
  console.log(window.location.pathname)
  // console.log(window.location);

  const thisStuff = () => {
    console.log(userCred);
    fetch('/login',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify(userCred),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  const handleClick = () => {
    thisStuff()
    if (
      loggedInStatus === false ||
      loggedInStatus === null ||
      loggedInStatus === undefined
    ) {
      setSignIn(true);
      dispatch(login({ value: true, type: 'login' }))
    } else if (loggedInStatus === true) {
      setSignIn(false);
      dispatch(logout({ value: false, type: 'logout' }));
    }
  }

  return (
    <Container>
      <div className='loginContainer'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                console.log(e.target.value)
                setUserCred({ 
                  ...userCred, 
                  email: e.target.value 
                  })
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                console.log(e.target.value)
                setUserCred(
                  {
                    ...userCred,
                    password: e.target.value
                  })
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button
            variant="primary"
            onClick={() => {
              console.log(userCred)
              handleClick();
              // navigate("/");
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