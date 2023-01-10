import React, { Fragment } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
const truckConfig = ['venderFirstName', 'venderLastName', 'address', 'dateAdded']
export const TruckDisplay = ({ setTruck, trucks, vendorDisplay, showDelete }) => {
    const handleDelete = (truckId) => {
        fetch('/api/deletetruck', {
            method: 'DELETE',
            headers:
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: truckId })
        }).then(data => data.json()).then((data) => {
            console.log(data);
        })
    }
    return (
        <Container>
            <Row>
                    {/* <Col xs={6} md={6}> */}
                {trucks ? trucks.map((truck) => (
                    <Col 
                        onClick={()=>{
                            setTruck(truck);
                        }}
                    xs={12} md ={6}>
                        {truck.name}
                        {showDelete ? <Button
                            style={{ float: 'right' }}
                            onClick={() => {
                                handleDelete(truck._id);
                            }}
                        >x</Button> : <Fragment></Fragment>}
                        <Row>

                        <Col xs={4}>
                            <img src={truck.IMG} />
                        </Col>
                        <Col xs={8} >
                            {truckConfig.map((key) => {
                                return (<p>{truck[key]}</p>)
                            })}
                        </Col>
                        </Row>
                    </Col>
                )) : 'trucks empty'}
                    {/* </Col> */}
            </Row>
        </Container>
    )
}