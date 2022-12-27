import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import './style.css';

export const CreateTruck = () => {
    const [userData, setUserData] = useState();
    const handleRegister = (userInfo) => {
        fetch('createTruck', {
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
                <h1> Set up you first truck or another truck </h1>
    
            </center>
            <div className='signup-container'>

                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Food Truck Name</Form.Label>
                        <Form.Control 
                        onChange={(e) => {
                            setUserData({
                                ...userData,
                                'email': e.target.value
                            })
                            
                        }}
                        onBlur={(e)=>{
                            // console.log()
                        }}
                         type="text" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Vender First Name</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserData({
                                ...userData,
                                'firstName': e.target.value
                            })
                        }} type="text" placeholder="Enter First Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Vender Last Name</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserData({
                                ...userData,
                                'lastName': e.target.value
                            })
                        }} type="text" placeholder="Enter Last Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Food Truck Address</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserData({
                                ...userData,
                                'pwd': e.target.value
                            })
                        }} type="text" placeholder="Address can change daily if needed" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>What flavors or food you have to offer</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserData({
                                ...userData,
                                'pwd': e.target.value
                            })
                        }} type="text" placeholder="Address can change daily if needed" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Food truck image</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserData({
                                ...userData,
                                'pwd': e.target.value
                            })
                        }} type="text" placeholder="Address can change daily if needed" />
                    </Form.Group>
                </Form>
                <Button
                    value={`Get Registered! `}
                    onClick={() => {
                        handleRegister(userData);
                    }}
                >Get Registered!!!</Button>
            </div>
        </Container>
    )
}
