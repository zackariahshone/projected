import React, { 
    Fragment, 
    useState, 
    useEffect, 
    useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    Col,
    Row,
    Container,
    Nav,
    Button
} from 'react-bootstrap';
// import Login from '../../Containers/Login/login';
import { isLoggedIn } from '../../appstore/Reducers/UserReducers';
import { colorArray, ROUTES } from '../../GlobalConstanst';
import { isVender } from '../../appstore/Reducers/VenderReducers';
import Login from '../../Containers/Login/login';
import SignUp from '../../Containers/Signup/signup';
import HomeNav from './homeNav';
import MobileNav from './mobileNav';
import './style.css';
import './bouncingarrow.css';

const NavSquares = () => {
    const navigate = useNavigate();
    const [guest, setGuest] = useState();
    const [direct, setDirect] = useState();
    const loggedInStatus = useSelector(isLoggedIn);

    
    let colorIndex = 0;
    let textIndex = colorArray.length - 1;
    const isUserVender = useSelector(isVender);

    const ref = useRef(null);
    const upperRef = useRef(null);
    // const handleScrollUp = () => {
    //   upperRef.current?.scrollIntoView({behavior: 'smooth'});
    // };
    const directLoginSignUp = (value) => {
        switch (value) {
            case 'signup':
                return (<SignUp />)
                case 'login':
                    return <Login scrollUp={setDirect}/>
            default:
                break;
        }
    }
    useEffect(()=>{
        if(direct == 'toTop'){
            upperRef.current?.scrollIntoView({behavior:'smooth'});
        }else if(direct != 'toTop'){
            ref.current?.scrollIntoView({behavior:'smooth'})
        }
    },[direct])

    return (
        <div className='circle' ref={upperRef}>
            <div className='homeComponent' >

                {loggedInStatus != true && guest !== true ?
                    <div className='loginSignUp'>
                        <div style={{ width: "100%" }}>
                            <h1>Find your new favorite <br /> food truck <b>now</b>.</h1>
                            <Container className='buttonContainer'>
                                <Row>
                                    <Col xs={12}>

                                        <Button
                                            onClick={() => {
                                                setDirect('login');
                                            }}
                                            className='loginButton logInbuttons' variant='light'>
                                            Login
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                setDirect('signup')
                                            }}
                                            className='createAccountButton logInbuttons' variant='outline-dark'> Create an Account</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col id={'guest'} xs={12}>
                                
                                        <p
                                            onClick={() => {
                                                setGuest(true);
                                            }}
                                        >Continue as guest</p>
                                    </Col>
                                </Row>
                            </Container>

                        </div>
        {
            direct === 'signup' || direct === 'login' ?
                <div className="arrow bounce">
                    <p className="fa fa-arrow-down fa-2x" href="#"> ↓ </p>
                </div> : ''
        }
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
            {
                direct === 'signup' || direct === 'login' ?
                    <Fragment >

                        <div
                            ref={ref}
                            className='handleSignin'
                        >
                            {directLoginSignUp(direct)}
                        </div>
                    </Fragment>
                    : <></>
            }
        </div>
    )
}

export default NavSquares;