import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Button,
  Form
} from 'react-bootstrap';
import { login, isLoggedIn,setUserData } from '../../appstore/Reducers/UserReducers';
import './style.css';
import { useNavigate, Link } from "react-router-dom";
const Login = () => {

  // may remove signIn/setSignIn 
  const [userCred, setUserCred] = useState();
  const [userFound, setUserFound] = useState();
  const [loginError, setLoginError] = useState();
  const [emailError, setEmailError] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedInStatus = useSelector(isLoggedIn);

  const getUser = () => {
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userCred),
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        dispatch(setUserData({...data}))
        setUserFound(data.token);
      });
  }

  const handleClick = () => {
    if (pwdError === false && emailError === false) {
      getUser()
      if (
       ( loggedInStatus === false || 
        loggedInStatus === undefined) &&
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
     ( loggedInStatus === false || 
       loggedInStatus === undefined) &&
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
        {loginError ? <p className='error'>* User not found try again or create and account! </p> : null}
        <Form>
          {emailError ? <p className='error'> * Not an email</p> : null}
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
                
                if (!String(e.target.value)
                      .toLowerCase()
                      .match(
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  )) {
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