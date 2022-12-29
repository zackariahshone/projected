import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
const VenderSignup = () => {
    const [userData, setUserData] = useState();
    /**
     * useToken creds
     * asign truck to user
     * 
     */
    const handleRegister=()=>{
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
              return response
            })
            .then(data => {
            //   console.log(data);
            //   dispatch(setUserData({ ...data }))
            //   setUserFound(data.token);
            //   localStorage.setItem('authToken', data.authToken)
            });
    }
    return (
        <Container>
        <Row>


            <h1> Vender Sign Up </h1>
        <Col 
            style={{borderRight:'solid',borderWidth:'thin'}}
            xs = { {span: 4, offset: 4 }}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Food Truck Accoutn Email</Form.Label>
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
            style={{paddingTop:"5%"}}
        >
            <Button
                onClick={()=>{
                    handleRegister();
                }}
            > Lets get Started</Button>
        </Col>
        </Row>
        </Container>
    )
}

export default VenderSignup;