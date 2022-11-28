import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {truckSearchList,loadReducer} from '../../appstore/Reducers/TruckSearch'
import {getData} from '../../genUtils/requests'
import './style.css';
// var ctx = document.getElementById("myChart1").getContext("2d");
// console.log(ctx);
const FoodTruckSearch = () => {
    const dispatch = useDispatch();
    const foodTruckList = useSelector(truckSearchList)
    const [truckList, setTruckList] = useState(foodTruckList);
    const [searchTerm, setSearchTerm] = useState('');
    // dispatch(loadReducer({test:'string'}))
    console.log(truckList);
    useEffect(()=>{
        // if(truckList === '' || truckList ===null || typeof truckList === 'undefined' ){
            getData('api/foodtrucklists','GET',{},loadReducer,{});
        // }
        // dispatch(loadReducer);
    },[truckList]);
    useEffect(()=>{
    const result = truckList?.filter(truck => truck.toLowerCase().includes(searchTerm.toLowerCase()));
    searchTerm !== '' ? setTruckList(result): setTruckList(foodTruckList);
},[searchTerm])

    return (
        <Container>
            <div id='searchInput'>
                <input
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}
                />
            </div>
            <div id='searchResults'>
                <ul>

                    {
                        truckList?.map((truck, i) => (
                            <li key = {`${i}_truckname`}>
                                {truck}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </Container>
    )
}

export default FoodTruckSearch;