// import { data } from 'jquery';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Switch from "react-switch";
import { currentUser } from '../../appstore/Reducers/UserReducers';

import {
    truckCategories
} from '../../appstore/Reducers/TruckSearch';
import DisplayTrucks from './DisplayTruck';
import {DisplayCategories} from './DisplayButtonCategories';
import './style.css';
import { colorArray } from '../../GlobalConstanst';
const RecommendedTrucks = () => {
    let colorIndex = 0;
    let textIndex = colorArray.length-1;
    const categories = useSelector(truckCategories);
    const [userCategories, setUserCategories] = useState([]);
    const [checked, setChecked] = useState();
    const userInfo = useSelector(currentUser);

    useEffect(()=>{
        if(checked){
            setUserCategories(userInfo.category)
        }
    });

    return (
        <Container>
            <div>
                <Row>
                    <Col sm={10}>
                        <h1>Find Your Flavor! </h1>
                    </Col>
                    <Col>

                        <button
                            className='resetButton'
                            onClick={() => {
                                setUserCategories([]);
                            }}
                        >Reset Selection</button>
                    </Col>
                    <label>
                        <Switch
                            onChange={(setChecked)}
                            checked={checked}
                        />
                    </label>
                </Row>
                <Row>
                    
                </Row>
            </div>
            <DisplayCategories setUserCategories={setUserCategories} userCategories = {checked?userInfo.category :userCategories} />
            <DisplayTrucks categories={userCategories} />
        </Container>
    );
}

export default RecommendedTrucks;