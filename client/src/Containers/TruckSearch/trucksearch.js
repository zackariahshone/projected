import React, { Fragment, useEffect, useState } from 'react';
import TruckSearchFilterButtons from './truckSearchFilterButtons';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { truckSearchList, loadReducer,setCategories } from '../../appstore/Reducers/TruckSearch';
import { getData } from '../../genUtils/requests';
import './style.css';
// var ctx = document.getElementById("myChart1").getContext("2d");
// console.log(ctx);
const FoodTruckSearch = () => {
    const foodTruckList = useSelector(truckSearchList)
    const [truckList, setTruckList] = useState(foodTruckList);
    const [searchTerm, setSearchTerm] = useState('');
    // dispatch(loadReducer({test:'string'}))
    useEffect(() => {
        getData('api/foodtrucklists', 'GET', {}, loadReducer, {});
        getData('api/getcategories','GET',{},setCategories,{});
    }, [truckList]);
    useEffect(() => {
        const result = truckList?.filter(truck => truck.name.toLowerCase().includes(searchTerm.toLowerCase()));
        searchTerm !== '' ? setTruckList(result) : setTruckList(foodTruckList);
    }, [searchTerm])

    return (
        <Container>

            <input
                className='searchInput'
                onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}
            />
            {/* <div className='filterButton'> */}
            <TruckSearchFilterButtons />
            {/* </div> */}
            <div id='searchResults'>
                <Row>

                    {
                       truckList ? truckList?.map(({ name, description, address, dateAdded,IMG }, i) => (
                            <Col xs={12} md={6} lg={4} xl={4} >

                                <div className='truckCard'>
                            <Row>
                            <Col>

                                    <li key={`${i}_truckname`}>
                                        {name}
                                    </li>
                                    <p> <b>about the truck:</b> {description}</p>
                                    <p> <b>here we are:</b> {address}</p>
                                    <p> <b>been on app since:</b> {dateAdded}</p>
                            </Col>
                            <Col>
                                <div className='mockBox'>
                                    <img className='mockImg' src={IMG} alt='foodtruck_image'/>
                                </div>
                            </Col>
                            </Row>
                                </div>
                            </Col>
                        ))
                    :''
                    }
                </Row>
            </div>
        </Container>
    )
}

export default FoodTruckSearch;