import React, { Fragment } from "react";
import { Row, Col, Container} from "react-bootstrap";



export const TruckListDisplay = ({ trucks }) => {
    return (
        <Container>
            <Row>
                {/* <Col xs={6} md={6}> */}
                {trucks ? trucks.map((truck) => (
                    <Col
                        xs={12}>
                        {truck.name}
                        {/* <Row>
                            <Col xs={4}> */}
                            
                                <img src={truck.IMG} 
                                alt={'truck image'}
                                    // onError={()=>{<div>not an image</div>}}

                                    />
                                <br/>
                                
                            {/* </Col>
                        </Row> */}
                    </Col>
                )) : 'trucks empty'}
                {/* </Col> */}
            </Row>
        </Container>
    )
}