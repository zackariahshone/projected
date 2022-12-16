import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import './style.css';
import {validator} from './signupUtils'

const SignUp = () => {
    const [userData, setUserData] = useState();
    const handleRegister = (userInfo) => {
        fetch('signup', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(userInfo),
        }).then(response => (
            console.log(response)
        ))
    }
    return (
        <Container >
            <center>
                <h1>Lets get Truckin`! </h1>
                <h2>sign up here</h2>
            </center>
            <div className='signup-container'>

                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                        onChange={(e) => {
                            setUserData({
                                ...userData,
                                'email': e.target.value
                            })
                            
                        }}
                        onBlur={(e)=>{
                            console.log(validator(e.target.value,'email'))
                        }}
                         type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserData({
                                ...userData,
                                'firstName': e.target.value
                            })
                        }} type="text" placeholder="Enter First Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserData({
                                ...userData,
                                'lastName': e.target.value
                            })
                        }} type="text" placeholder="Enter Last Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserData({
                                ...userData,
                                'pwd': e.target.value
                            })
                        }} type="password" placeholder="Enter a super secret password" />
                    </Form.Group>
                </Form>
                <Button
                    value={`Get Registered! `}
                    onClick={() => {
                        console.log(userData)
                        handleRegister(userData);
                    }}
                >Get Registered!!!</Button>
            </div>
        </Container>
    )
}

export default SignUp;