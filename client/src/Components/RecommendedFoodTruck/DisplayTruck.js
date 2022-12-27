import { useEffect, useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {
    truckSearchList
} from '../../appstore/Reducers/TruckSearch';
import './style.css';

const buttonFilters = (arr, filters)=>{
    const filteredItems = []
    arr.forEach((truck)=>{
    filters.forEach((filter)=>{
        if(truck.category.includes(filter) && filteredItems.indexOf(truck) === -1 ){
            filteredItems.push(truck);
        }
    })
 })
 return filteredItems;
}

const DisplayTrucks = ({categories}) => {
    const truckList = useSelector(truckSearchList);
    const [displayNames, setDisplayNames] =useState([]);
    useEffect(()=>{
     setDisplayNames(buttonFilters(truckList,categories))
    },[categories])
        
    return (
        
        <div>{
            displayNames.length === 0 ? `select at least one category`:
            <Container>
            <Row>
                {displayNames.map((truck)=>(
                    <Col sm={6} md={4}>
                        <div
                            className={'foodRecTrucks'}
                        >
                            <b>{truck.name}</b>
                            <p>{truck.address}</p>
                        </div>
                    </Col>
                ))}
            </Row>
            </Container> }   
        </div>
    )
}

export default DisplayTrucks;