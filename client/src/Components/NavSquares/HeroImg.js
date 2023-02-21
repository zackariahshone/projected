import React ,{ Fragment }from 'react';
import { useSelector } from 'react-redux';
import {
    Col,
    Row,
    Container,
    Nav
} from 'react-bootstrap';
import HeroImageg from './foodTruckHero.png';
import './style.css';
import { colorArray, ROUTES } from '../../GlobalConstanst';
import { isVender } from '../../appstore/Reducers/VenderReducers';
const HeroImg = () => {
    let colorIndex = 0;
    let textIndex = colorArray.length - 1;
    const isUserVender = useSelector(isVender);

    
    return (
        <Container>
            <div className='heroImg'>
                <img className = 'heroImg' src={HeroImageg} alt='no img'/>
            </div>
        </Container>
    )
}

export default HeroImg;