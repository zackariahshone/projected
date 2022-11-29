import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import './style.css';
const handleRegister=()=>{

}
const SignUp = () => (



    <Container >
    <center>
        <h1>Lets get Truckin`! </h1>
        <h2>sign up here</h2>
    </center>
    <div className = 'signup-container'>

        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter a super secret password" />
            </Form.Group>
        </Form>
        <Button 
            value={`Get Registered! `}
            onClick={()=>{
                handleRegister()
            }}
        >Get Registered!!!</Button>
    </div>
    </Container>

)

export default SignUp;