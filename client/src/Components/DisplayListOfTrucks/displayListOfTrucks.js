import React, { Fragment,useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";
import {HoverDetailsComponent} from "../HoverDetails";

export const TruckListDisplay = ({ trucks }) => {
    const [selectedTruck, setSelectedTruck] = useState(false);
    return (
        // <Container>
        <>
            {trucks ? trucks.map((truck) => (
                <>
                    <Row className='singleTruck' 
                            onClick ={(e)=>{
                            
                                selectedTruck === true ? setSelectedTruck(false) : setSelectedTruck(true);
                         }} 
                    >

                        <Col xs={12} sm={12} md={4}>
                            <img className="singleTruckImg" src={truck.IMG} alt={'truckimage'} />
                        </Col>
                        <Col 
                            className={'displayTruckDetails scroll'}
                         >

                            <HoverDetailsComponent clicked ={selectedTruck}  truckData = {truck}/>
                            <b>{truck.name}</b>
                            <Row>
                                <Col xs={12}>open</Col>
                                <Col>{truck?.address}</Col>
                            </Row>
                            <Row>
                                <Col>Reviews: 4.5/5</Col>
                            </Row>
                        </Col>
                        < br />
                    </Row>
                </>
            )) : 'trucks empty'}
        </>
        // </Container>
    )
}