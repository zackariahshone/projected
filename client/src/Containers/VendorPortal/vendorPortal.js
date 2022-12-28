import React, { Fragment, useState } from "react";
import { Container, Col, Row,Form,Button } from "react-bootstrap";
import { DUMMY_IMG } from "../../GlobalConstanst";
import { CreateTruck } from "./CreateTruck";
import { EditTruck } from "./EditTruck";
import './style.css'

export const VendorPortal = () => {
    const [selection, setSelection] = useState();
    const [userCred, setUserCred]=useState();
    const [signedin, setSignedIn] = useState(false);
    const handleClick = ()=>{
        setSignedIn(true);
    }
    const directOptions = (selection) => {
        switch (selection) {
            case 'createTruck':
                return <CreateTruck />;
            case 'editTruck':
                return <EditTruck />;
            default:
                return <h2>Sign in please and then make a selection</h2>;
        }
    }
    return (
        <Container style={{
            height: "100%",
            width: "100%"
        }}>
            <center><h1>Vendor Portal</h1></center>
            <Row>
                <Col sm={6}>
                    <div className="vendorImg">
                        <center><img className="vendorImg" src={DUMMY_IMG} /></center>
                    </div>
                </Col>
                <Col>
                    {!signedin ?
                        <Col>
                            <Form>
                                {/* {emailError ? <p className='error'> * Not an email</p> : null} */}
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
                                            // setEmailError(false);
                                        }}
                                        // onBlur={(e) => {

                                        //     if (!String(e.target.value)
                                        //         .toLowerCase()
                                        //         .match(
                                        //             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                        //         )) {
                                        //         setEmailError(true)
                                        //     }
                                        // }}
                                    />
                                </Form.Group>
                                {/* {pwdError ? <p className='error'>*password cannot be blank</p> : null} */}
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
                                            // setPwdError(false);
                                        }}
                                        // onBlur={(e) => {
                                        //     if (e.target.value === '') {
                                        //         setPwdError(true)
                                        //     }
                                        // }}
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
                            </Form>

                        </Col>
                        :
                        <div className="vendorInputForm">
                            <ui>
                                <li>
                                    <button
                                        onClick={(e) => {
                                            setSelection("createTruck")
                                        }}
                                    >Create Truck</button>
                                </li>
                                <li>
                                    <button
                                        onClick={(e) => {
                                            setSelection("editTruck")
                                        }}
                                    >Edit Trucks</button>
                                </li>
                            </ui>
                        </div>}
                </Col>
            </Row>
            <Row>
                {directOptions(selection)}
            </Row>

        </Container>
    )
}