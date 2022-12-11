import { Fragment, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {_} from 'lodash';
import {
    truckCategories,
    truckSearchList
} from '../../appstore/Reducers/TruckSearch';
import './style.css';

const buttonFilters = (arr, filters)=>{
    const filteredItems = []
    arr.forEach((truck)=>{
    filters.forEach((filter)=>{
        console.log(filteredItems);
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
            <Fragment>
                {displayNames.map((truck)=>(
                    <b>{truck.name} ,</b>
                ))}
            </Fragment> }   
        </div>
    )
}

export default DisplayTrucks;