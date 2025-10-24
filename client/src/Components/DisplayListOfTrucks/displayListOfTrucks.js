import React, { Fragment, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";
import { HoverDetailsComponent } from "../HoverDetails";
import parse from 'html-react-parser';

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
                            <Col>{ truck?.rating >= 0 ? <ShowStar rating = {truck.rating}/> : 'give us a review!' }</Col>
                        </Row>
                    </Row>
                </>
            )) : 'trucks empty'}
            {truckData ?
                <HoverDetailsComponent setSelectedTruck={setSelectedTruck} clicked={selectedTruck} truckName={truckKey} truckData={truckData} />
                : <></>
            }

        </>
    )
}

const ShowStar =({rating})=>{
    const starArray = []
    for (let i = 0; i < rating; i++) {
          starArray.push("&#9733;"); 
    }
    return(
        starArray.map((star)=>(
            <>&#9733;</>
        ))
    )
}