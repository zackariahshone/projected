// import { data } from 'jquery';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Switch from "react-switch";
import {
    truckCategories
} from '../../appstore/Reducers/TruckSearch';
import DisplayTrucks from './DisplayTruck';
import './style.css';
const buttonColors = ['#80B0A4', '#D04F2C', '#D9AC36', '#D6742B', '#431E15','#428F5A'];
const RecommendedTrucks = () => {
    let colorIndex = 0;
    let textIndex = buttonColors.length-1;
    const categories = useSelector(truckCategories);
    const [userCategories, setUserCategories] = useState([]);
    const [checked, setChecked] = useState();
    return (
        // <></>
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
            {Object.values(categories).map((category, i) => {
               if(i>0){
                colorIndex++;
                textIndex--;
               }
                colorIndex = buttonColors.length === colorIndex ? 0 : colorIndex;
                textIndex = textIndex !== -1 ? textIndex : buttonColors.length-1;
                console.log(`Color Index: ${colorIndex} Text Index: ${textIndex}`)  

                return (
                    <button
                        style={{ backgroundColor: `${buttonColors[colorIndex]}`, color: `${buttonColors[textIndex]}` }}
                        key={`catButton_${i}`}
                        className='categoryButtons'
                        onClick={() => {
                            setUserCategories([...userCategories, category])
                        }}
                    >{category}</button>
                )
            })}
            <DisplayTrucks categories={userCategories} />
        </Container>
    );
}

export default RecommendedTrucks;