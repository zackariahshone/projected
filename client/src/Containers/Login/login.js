import React, { useEffect, useState } from 'react';
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
  const [loginError, setLoginError] = useState();
  const [emailError, setEmailError] = useState();
  const [pwdError, setPwdError] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedInStatus = useSelector(isLoggedIn);

  const getUser = () => {
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userCred),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setUserFound(data);
      });
  }

  const handleClick = () => {
    if (pwdError === false && emailError === false) {
      getUser()
      if (
        loggedInStatus === false &&
        userFound === true
      ) {
        dispatch(login({ value: true, type: 'login' }))
        setLoginError(false);
        navigate("/");
      }
    }
  }
  useEffect(() => {
    if (
      loggedInStatus === false &&
      userFound === true
    ) {
      dispatch(login({ value: true, type: 'login' }))
      setLoginError(false);
      navigate("/");
    }
    if (userFound === false) {
      setLoginError(true);
    }
  }, [userFound, loggedInStatus])
  return (
    <Container>
      <div className='loginContainer'>
        {loginError ? <h6 className='error'>* User not found try again or create and account! </h6> : ''}
        <Form>
          {emailError ? <text className='error'> * Email cannot be blank</text> : null}
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
                setEmailError(false);
              }}
              onBlur={(e) => {
                if (e.target.value === '') {
                  setEmailError(true)
                }
              }}
            />
          </Form.Group>
          {pwdError ? <p className='error'>*password cannot be blank</p>:null}
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
                  setPwdError(false);
              }}
              onBlur={(e) => {
                if (e.target.value === '') {
                  setPwdError(true)
                }
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

            }}
          >
            Submit
          </Button>
          <Link to="/signup">

            <Button
              className="signUp signUp-button"
              onClick={() => {
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