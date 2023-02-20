import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    Col,
    Row,
    Container,
    Nav,
    Button
} from 'react-bootstrap';
import Login from '../../Containers/Login/login';
import { isLoggedIn } from '../../appstore/Reducers/UserReducers';
import { colorArray, ROUTES } from '../../GlobalConstanst';
import { isVender } from '../../appstore/Reducers/VenderReducers';
import HomeNav from './homeNav';
import MobileNav from './mobileNav';
import './style.css';
const NavSquares = () => {
    const navigate = useNavigate();
    const [guest, setGuest] = useState();
    const loggedInStatus = useSelector(isLoggedIn);
    let colorIndex = 0;
    let textIndex = colorArray.length - 1;
    const isUserVender = useSelector(isVender);
    console.log(loggedInStatus);
    return (
        <div className='circle'>
            {loggedInStatus != true && guest !== true ?
                <div className='loginSignUp'>
                    <div style = {{width:"100%"}}>
                        <h1>Find your new favorite <br /> food truck <b>now</b>.</h1>
                        <Container className='buttonContainer'>
                            <Row>
                                <Col xs={12}>

                                    <Button 
                                    onClick={()=>{
                                        navigate('/login');
                                    }}
                                    className='loginButton logInbuttons' variant='light'>
                                            Login
                                    </Button>
                                    <Button 
                                    onClick={()=>{
                                        navigate('/signup')
                                    }} 
                                    className='createAccountButton logInbuttons' variant='outline-dark'> Create an Account</Button>
                                </Col>
                            </Row>
                            <Row>
                            <Col xsx={12}>
                                <p
                                    onClick={()=>{
                                        setGuest(true);
                                    }}
                                >Continue as guest</p>
                            </Col>
                            </Row>
                        </Container>

                    </div>
                </div> :
                <>
                    <MobileNav />
                    <div className='homeNav' >
                        <Row style={{ paddingTop: '15%' }}>
                            <Col xs={6}>
                            </Col>
                            <Col>
                                <HomeNav />
                            </Col>
                        </Row>
                    </div>
                </>

            }
        </div>
    )
}

export default NavSquares;