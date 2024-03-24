import React, { useEffect, useState } from 'react';
import TruckSearchFilterButtons from './truckSearchFilterButtons';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { truckSearchList, loadReducer, setCategories } from '../../appstore/Reducers/TruckSearch';
import { getData } from '../../genUtils/requests';
import './style.css';
const FoodTruckSearch = () => {
    const foodTruckList = useSelector(truckSearchList)
    const [truckList, setTruckList] = useState(foodTruckList);
    const [searchTerm, setSearchTerm] = useState('');
    
    // leave in for testing
    // useEffect(() => {
    //     getData('api/foodtrucklists', 'GET', {}, loadReducer, {});
    //     getData('api/getcategories','GET',{},setCategories,{});
    // }, [truckList]);

    useEffect(() => {
        const result = foodTruckList?.filter(truck => truck.name.toLowerCase().includes(searchTerm.toLowerCase()));
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
            <TruckSearchFilterButtons />
            <div id='searchResults'>
                <Row>
                    {
                        truckList ? truckList?.map(({ name, description, address, dateAdded, IMG }, i) => (
                            <Col key={`${i}_COl1`} xs={12} md={6} lg={4} xl={4} >

                                <div key={`${i}_div1`} className='truckCard'>
                                    <Row
                                        key={`${i}_ROW1`}
                                    >
                                        <Col
                                            key={`${i}_Col2`}
                                        >

                                            <li key={`${i}_truckname`}>
                                                {name}
                                            </li>
                                            <p> <b>about the truck:</b> {description}</p>
                                            <p> <b>here we are:</b> {address}</p>
                                            <p> <b>been on app since:</b> {dateAdded}</p>
                                        </Col>
                                        <Col
                                            key={`${i}_COl3`}
                                        >
                                            <div
                                                key={`${i}_div2`}
                                                className='mockBox'>
                                                <img key={`${i}_img1`} className='mockImg' src={IMG} alt='foodtruck_image' />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        ))
                            : ''
                    }
                </Row>
            </div>
        </Container>
    )
}

export default FoodTruckSearch;