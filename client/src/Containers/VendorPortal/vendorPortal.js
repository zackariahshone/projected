import React, { Fragment, useEffect, useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { DUMMY_IMG } from "../../GlobalConstanst";
import { CreateTruck } from "./CreateTruck";
import { EditTruck } from "./EditTruck";
import { isVender } from "../../appstore/Reducers/VenderReducers";
import { useSelector } from "react-redux";
import { TruckDisplay } from "../../Components/TruckDisplay/truckDisplay";
import './style.css'

export const VenderPortal = () => {
    const [selection, setSelection] = useState();
    const [userCred, setUserCred] = useState();
    const [signedin, setSignedIn] = useState(false);
    const isUserVender = useSelector(isVender);
    const [trucks, setTrucks] = useState();

    const handleClick = () => {
        setSignedIn(true);
    }
    useEffect(() => {
        fetch('/vendortrucks', {
            method: 'GET',
            headers: {
                token: localStorage.getItem('authToken')
            }
        }).then(data => data.json()).then(trucksData => {
            setTrucks(trucksData);
        })
    },[])
    const directOptions = (selection) => {
        switch (selection) {
            case 'createTruck':
                return <CreateTruck />;
            case 'editTruck':
                return <EditTruck />;
            default:
                return <h2>Create new food trucks or Edit Food Trucks</h2>;
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
                    {!isUserVender ?
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
                            <Container
                                style={{ padding: '10%' }}
                            >
                                <Row>
                                    <Col>
                                        <Button
                                            onClick={(e) => {
                                                setSelection("createTruck")
                                            }}
                                        >Create Truck</Button>
                                    </Col>
                                    <Col>
                                        <Button
                                            onClick={(e) => {
                                                setSelection("editTruck")
                                            }}
                                        >Edit Trucks</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </div>}
                </Col>
            </Row>
            <Row>
                {directOptions(selection)}
            </Row>
            <TruckDisplay trucks={trucks} />
        </Container>
    )
}