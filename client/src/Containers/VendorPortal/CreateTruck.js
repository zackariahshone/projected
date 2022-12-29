import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './style.css';

export const CreateTruck = () => {
    const [userData, setUserData] = useState();
    const navigate = useNavigate();
    const handleRegister = (venderInfo) => {
        fetch('/api/createTruck', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'token':localStorage.getItem('authToken')
            },
            body: JSON.stringify(venderInfo),
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
                                'name': e.target.value.trim()
                            })
                        }}
                         type="text" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Vender First Name</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserData({
                                ...userData,
                                'venderFirstName': e.target.value.trim()
                            })
                        }} type="text" placeholder="Enter First Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Vender Last Name</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserData({
                                ...userData,
                                'venderLastName': e.target.value.trim()
                            })
                        }} type="text" placeholder="Enter Last Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Food Truck Address</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserData({
                                ...userData,
                                'address': e.target.value.trim()
                            })
                        }} type="text" placeholder="Address can change daily if needed" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>What flavors or food you have to offer</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserData({
                                ...userData,
                                'category': e.target.value.split(',')
                            })
                        }} type="text" placeholder="Address can change daily if needed" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Food truck image</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserData({
                                ...userData,
                                'IMG': e.target.value.trim()
                            })
                        }} type="text" placeholder="Address can change daily if needed" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password for your Food truck account</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserData({
                                ...userData,
                                'pwd': e.target.value.trim()
                            })
                        }} type="text" placeholder="Address can change daily if needed" />
                    </Form.Group>
                </Form>
                <Button
                    value={`Get Registered! `}
                    onClick={() => {
                        handleRegister(userData);
                        navigate('/vender')
                    }}
                >Get Registered!!!</Button>
            </div>
        </Container>
    )
}
