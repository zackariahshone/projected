import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setVenderCred, setTruckData } from "../../appstore/Reducers/VenderReducers";
const VenderSignup = () => {
    const [userData, setUserData] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    /**
     * useToken creds
     * asign truck to user
     * 
     */
    const handleRegister = () => {
        fetch('/registration', {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('authToken')
            },
            body: JSON.stringify(userData),
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                dispatch(setVenderCred(
                    {
                        ...data,
                        vender: true
                    }))
                navigate('/vender')
            });
    }
    return (
        <Container>
            <Row>
                <h1> Vender Sign Up </h1>
                <Col
                    style={{ borderRight: 'solid', borderWidth: 'thin' }}
                    xs={{ span: 4, offset: 4 }}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Food Truck Account Email</Form.Label>
                            <Form.Control
                                onChange={(e) => {
                                    setUserData({
                                        ...userData,
                                        'foodTruckEmail': e.target.value.trim()
                                    })
                                }}
                                onBlur={(e) => {
                                    // console.log()
                                }}
                                type="text" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Truck Account Password</Form.Label>
                            <Form.Control
                                onChange={(e) => {
                                    setUserData({
                                        ...userData,
                                        'foodTruckPassword': e.target.value.trim()
                                    })
                                }}
                                onBlur={(e) => {
                                    // console.log()
                                }}
                                type="text" placeholder="Enter email" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col
                    style={{ paddingTop: "5%" }}
                >
                    <Button
                        onClick={() => {
                            handleRegister();
                        }}
                    > Lets get Started</Button>
                </Col>
            </Row>
        </Container>

    )
}

export default VenderSignup;