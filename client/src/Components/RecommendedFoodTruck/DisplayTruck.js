import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {
    truckCategories,
    truckSearchList
} from '../../appstore/Reducers/TruckSearch';
import './style.css';

const DisplayTrucks = (props) => {
    const truckList = useSelector(truckSearchList);

        console.log(truckList)
    return (
        
        <div>{truckList.map((truck)=>{
          return( <>{truck.name}  ,</> )
        })}</div>
    )
}

export default DisplayTrucks;