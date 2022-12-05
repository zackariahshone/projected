import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Button,
  Form
} from 'react-bootstrap';
import { login, logout, isLoggedIn } from '../../appstore/Reducers/UserReducers';
import './style.css';
import { useNavigate, Link } from "react-router-dom";
const Login = () => {

  // may remove signIn/setSignIn 
  const [userCred, setUserCred] = useState();
  const [userFound, setUserFound] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedInStatus = useSelector(isLoggedIn);

  const thisStuff = () => {
    fetch('/login',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify(userCred),
    })
      .then(response => response.json())
      .then(data => {
        if(data === false){
          setUserFound(true);
        }else{
          setUserFound(false)
        }
      });
  }

  const handleClick = () => {
    thisStuff()
    if (
      loggedInStatus === false ||
      loggedInStatus === null ||
      loggedInStatus === undefined || 
      userFound === true
    ) {
      // setSignIn(true);
      dispatch(login({ value: true, type: 'login' }))
    } else if (loggedInStatus === true) {
      // setSignIn(false);
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
              handleClick();
              // navigate("/");
            }}
          >
            Submit
          </Button>
          <Link to="/signup">

        <Button  
        className="signUp signUp-button" 
        onClick={()=>{
          navigate('/signup')
        }}
        >Sign Up Please </Button>
          </Link>
        </Form>
      </div>
    </Container>
  )
}

export default Login;