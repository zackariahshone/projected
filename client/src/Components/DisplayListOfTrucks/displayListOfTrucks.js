import React, { Fragment } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";


export const TruckListDisplay = ({ trucks }) => {
    return (
        // <Container>
                <>

                {trucks ? trucks.map((truck) => (
                    <>
            <Row className='singleTruck' >

                    {/* <Col
                        xs={3}
                        > */}
                                <img className="singleTruckImg" src={truck.IMG} 
                                alt={'truck image'}
                                />
                    {/* </Col> */}
                    <Col className ={'displayTruckDetails scroll'} >
                        <b>{truck.name}</b>
                        <Row>
                            <Col xs={2}>open</Col>
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