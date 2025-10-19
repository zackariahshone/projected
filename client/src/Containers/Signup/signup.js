import React, { useState } from "react";
import { DisplayCategories } from "../../Components/RecommendedFoodTruck/DisplayButtonCategories";
import { useSelector,useDispatch } from 'react-redux';
import {
    Container,
    Form,
    Button,
} from "react-bootstrap";
import './style.css';
import { useNavigate } from "react-router-dom";
import { validator } from './signupUtils'
import { isLoggedIn,currentUser, setUserData,login } from '../../appstore/Reducers/UserReducers';
import localStorage from 'redux-persist/es/storage';


const SignUp = () => {
    const [userData, setUserFormData] = useState();
    const [userCategories, setUserCategories] = useState([]);
    const navigate = useNavigate();
    const loggedInStatus = useSelector(isLoggedIn);
    const userInfo = useSelector(currentUser);
    const dispatch = useDispatch();

    const handleEdit=(userData)=>{
        fetch('/editUser',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'x-access-token':userInfo.authToken
            },
            body:JSON.stringify(userData)
        }).then(response=>(response.json()))
        .then((data)=>{
            dispatch(setUserData({...data}))
            localStorage.setItem('authToken', data.authToken)
            navigate("/");
        })
    };
    const handleRegister = (userInfo) => {
        fetch('signup', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(userInfo),
        }).then(response =>response.json()).then((userData)=>{
          
            dispatch(setUserData({ ...userInfo }))
            dispatch(login({ value: true, type: 'login' }))
            navigate("/")
        })
    }
    return (
        <Container >
            <center>
                <h1>Lets get Truckin`! </h1>
                <h2>{loggedInStatus?`edit user here`:`sign up here`}</h2>
            </center>
            <div className='signup-container'>

                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setUserFormData({
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
                            setUserFormData({
                                ...userData,
                                'firstName': e.target.value
                            })
                        }} type="text" placeholder="Enter First Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserFormData({
                                ...userData,
                                'lastName': e.target.value
                            })
                        }} type="text" placeholder="Enter Last Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => {
                            setUserFormData({
                                ...userData,
                                'pwd': e.target.value
                            })
                        }} type="password" placeholder="Enter a super secret password" />
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
                        handleEdit({...userData,category:userCategories})
                    }}
                >Edit Profile</Button>
                }
            </div>
        </Container>
    )
}

export default SignUp;