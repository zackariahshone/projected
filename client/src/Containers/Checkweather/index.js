import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
//grab ip address info to check local weather
const Checkweather = () => {
    const array = [34,23,45,55,35]
    return (
        <>

            <h1>
                Check Weather
            </h1>
            <div className={'weathercheckDashboard'}>
                <Container>
                    <Row>
                        <Col xs={2}>
                            <h1>30*</h1>
                        </Col>
                        <Row>
                            {array.map((fiveDay , i ) => (
                                <Col xs={2}>
                                    <h3>{`Day ${i} is around ${fiveDay}`}</h3>
                                </Col>
                            ))

                            }
                        </Row>
                    </Row>

                </Container>
            </div>
        </>
    )
}

export default Checkweather;