import React, { Fragment } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";


export const TruckListDisplay = ({ trucks }) => {
    return (
        <Container>
                
                {trucks ? trucks.map((truck) => (
                    <>
            <Row >

                    <Col
                        xs={3}
                        >
                                <img src={truck.IMG} 
                                alt={'truck image'}
                                />
                    </Col>
                    <Col className ={'displayTruckDetails scroll'} >
                    {console.log(truck)}
                        {truck.name}
                        <ul>
                            <li>{truck?.address}</li>
                            <li>{truck?.description}</li>
                        </ul>
                        
                    </Col>
                        {/* <Row>
                            <Col xs={4}> */}

                    < br />

                    {/* </Col>
                        </Row> */}
            </Row>
                    </>
                )) : 'trucks empty'}
        </Container>
    )
}