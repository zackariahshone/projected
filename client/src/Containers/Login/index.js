import React, { useEffect, useRef,useState } from 'react';
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
  const [signIn, setSignIn] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedInStatus = useSelector(isLoggedIn);
  console.log(loggedInStatus)
  const handleClick = () => {
    if(
      loggedInStatus === false ||
      loggedInStatus === null ||
      loggedInStatus === undefined
      ){
        setSignIn(true);
        dispatch(login({value:true,type:'login'}))
      }else if(loggedInStatus === true){
        setSignIn(false);
        dispatch(logout({value:false,type:'logout'}));
      }
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
            onClick={() => {
              handleClick();
              navigate("/");
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