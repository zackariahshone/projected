import React, { Fragment, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";
import { HoverDetailsComponent } from "../HoverDetails";

export const TruckListDisplay = ({ trucks }) => {
    const [selectedTruck, setSelectedTruck] = useState(false);
    const [truckKey, setTruckKey] = useState('');
    const [truckData, setTruckData] = useState('');

    return (
        <>
            {trucks ? trucks.map((truck) => (
                <>
                    <Row className='singleTruck'
                        onClick={(e) => {
                            selectedTruck === true ? setSelectedTruck(false) : setSelectedTruck(true);
                            setTruckKey(truck.name);
                            setTruckData(truck);
                        }}
                    >
                        <Row
                            className={'displayTruckDetails scroll'}
                        >
                            <Col><b>{truck.name}</b></Col>
                            <Col>open</Col>
                            <Col>Reviews: 4.5/5</Col>
                        </Row>
                    </Row>
                </>
            )) : 'trucks empty'}
            {console.log(selectedTruck, 'selected truck')}
            {truckData ?
                <HoverDetailsComponent setSelectedTruck={setSelectedTruck} clicked={selectedTruck} truckName={truckKey} truckData={truckData} />
                : <></>
            }

        </>
    )
}