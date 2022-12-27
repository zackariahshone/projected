import React, { useState } from "react";
import { DisplayCategories } from "../../Components/RecommendedFoodTruck/DisplayButtonCategories";
import { useSelector } from 'react-redux';
import {
    Container,
    Form,
    Button,
    Row
} from "react-bootstrap";
import './style.css';
import { validator } from './signupUtils'
import { isLoggedIn } from '../../appstore/Reducers/UserReducers';

const SignUp = () => {
    const [errorHandle, setErrorhandle] = useState();
    const [userData, setUserData] = useState();
    const [userCategories, setUserCategories] = useState([]);
    const loggedInStatus = useSelector(isLoggedIn);
    const handleEdit=()=>{};
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
    // Object.keys(errorHandle)
    return (
        <Container >
            <center>
                <h1>Lets get Truckin`! </h1>
                <h2>sign up here</h2>
            </center>
            <div className='signup-container'>

                <Form>
                    <Form.Group className="mb-3">
                        {/* {emailError ? <text className="error">Please enter a valid email</text>} */}
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setUserData({
                                    ...userData,
                                    'email': e.target.value
                                })

                            }}
                            onBlur={(e) => {
                                validator(e.target.value, 'email')
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
                        }}
                            onBlur={(e) => {
                                setErrorhandle({ ...errorHandle, fnameError: validator(e.target.value, 'text') })
                            }}
                            type="text" placeholder="Enter First Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserData({
                                ...userData,
                                'lastName': e.target.value
                            })
                        }}
                            onBlur={(e) => {
                                setErrorhandle({ ...errorHandle, lnameError: validator(e.target.value, 'text') })
                            }}
                            type="text" placeholder="Enter Last Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserData({
                                ...userData,
                                'pwd': e.target.value
                            })
                        }}
                            onBlur={(e) => {
                                setErrorhandle({ ...errorHandle, pwdError: validator(e.target.value, 'password') })
                            }}
                            type="password" placeholder="Enter a super secret password" />
                    </Form.Group>
                </Form>
                <Container>
                    <div>
                        <label>Which foods are you looking for?</label>
                    </div>
                    <DisplayCategories setUserCategories = {setUserCategories} userCategories = {userCategories}/>
                </Container>
                {!loggedInStatus?
                <Button
                    className="signUpButton"
                    value={`Get Registered! `}
                    onClick={() => {
                        handleRegister({...userData,category:userCategories});
                    }}
                >Get Registered!!!</Button>
                :<Button
                    className="signUpButton"
                    value={`Get Registered! `}
                    onClick={() => {
                        handleEdit()
                    }}
                >Edit Profile</Button>
                }
            </div>
        </Container>
    )
}

export default SignUp;