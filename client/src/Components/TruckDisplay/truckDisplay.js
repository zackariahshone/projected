import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
const truckConfig = ['venderFirstName','venderLastName','address','dateAdded']
export const TruckDisplay = ({ trucks, vendorDisplay }) => {
    const handleDelete=(truckId)=>{
        fetch('/api/deletetruck',{
            method:'DELETE',
            headers:
            {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({id:truckId})
        }).then(data=>data.json()).then((data)=>{
            console.log(data);
        })
    }
    return (
        <Container>
            <Row>
                {trucks ? trucks.map((truck) => (
                    <Col>
                                {truck.name}
                        <Button
                            style={{float:'right'}}
                            onClick={()=>{
                                handleDelete(truck._id);
                            }}
                        >x</Button>
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