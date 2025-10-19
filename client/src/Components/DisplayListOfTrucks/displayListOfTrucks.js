import React, { Fragment, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";
import { HoverDetailsComponent } from "../HoverDetails";
<<<<<<< HEAD
import { userFavorites } from "../../appstore/Reducers/UserReducers";
import { useSelector } from "react-redux";
export const TruckListDisplay = ({ trucks }) => {
    const [selectedTruck, setSelectedTruck] = useState(false);
    const [truckKey, setTruckKey] = useState('');
    const [modaltruck, setmodalTruck] = useState('');
    const userFavoritesList = useSelector(userFavorites);

=======

export const TruckListDisplay = ({ trucks }) => {
    const [selectedTruck, setSelectedTruck] = useState(false);
    const [truckKey, setTruckKey] = useState('');
    const [truckData, setTruckData] = useState('');
    
>>>>>>> 5ba7dc360d77881f0cf2fd8921fbfec7adad298f
    return (
        <>
<<<<<<< HEAD
            {
                trucks ? trucks.map((truck) => (
                    
                        
                            <Row className='singleTruck'
                                onClick={(e) => {
                                    selectedTruck === true ? setSelectedTruck(false) : setSelectedTruck(true);
                                    setTruckKey(truck.name);
                                    setmodalTruck(truck);
                                }}
                            >

                                <Col xs={12} sm={12} md={4}>
                                    <img className="singleTruckImg" src={truck.IMG} alt={'truckimage'} />
                                </Col>
                                <Col
                                    className={'displayTruckDetails scroll'}
                                >

                                    <b>{truck.name}</b>
                                   <div> {userFavoritesList.includes(truck.name)? '♥' : ''}</div>
                                    <Row>
                                        <Col xs={12}>open</Col>
                                        <Col>{truck?.address}</Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6} >Reviews: 4.5/5</Col>

                                    </Row>
                                </Col>
                                < br />
                            </Row>
                        
                    
                )) : 'trucks empty'}
                            <HoverDetailsComponent setSelectedTruck={setSelectedTruck} clicked={selectedTruck} truckData={truckKey} truck={modaltruck} />
=======
            {trucks ? trucks.map((truck) => (
                <>
                    <Row className='singleTruck'
                        onClick={(e) => {
                            selectedTruck === true ? setSelectedTruck(false) : setSelectedTruck(true);
                            setTruckKey(truck.name);
                            setTruckData(truck);
                        }}
                    >

                        {/* <Col xs={12} sm={12} md={4}>
                            <img className="singleTruckImg" src={truck.IMG} alt={'truckimage'} />
                        </Col> */}
                        <Row
                            className={'displayTruckDetails scroll'}
                        >
                            <Col><b>{truck.name}</b></Col>
                            <Col>open</Col>
                            <Col>{truck?.address}</Col>
                            <Col>Reviews: 4.5/5</Col>
                        </Row>
                    </Row>
                </>
            )) : 'trucks empty'}
            {console.log(selectedTruck,'selected truck')}
            <HoverDetailsComponent setSelectedTruck={setSelectedTruck} clicked={selectedTruck} truckName={truckKey} truckData={truckData}/>
>>>>>>> 5ba7dc360d77881f0cf2fd8921fbfec7adad298f
        </>
    )
}