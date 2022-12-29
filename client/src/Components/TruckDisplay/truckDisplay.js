import React from "react";
import { Row, Col, Container } from "react-bootstrap";
const truckConfig = ['venderFirstName','venderLastName','address','dateAdded']
export const TruckDisplay = ({ trucks }) => {
    return (
        <Container>
            <Row>
                {trucks ? trucks.map((truck) => (
                    <Col>
                                {truck.name}
                        <Col xs={3} md ={3}>
                             <img src={truck.IMG}/>
                        </Col>
                        <Col>
                            {truckConfig.map((key)=>{
                                return(<p>{truck[key]}</p>)
                            })}
                        </Col>
                    </Col>
                )) : 'trucks empty'}
            </Row>
        </Container>
    )
}