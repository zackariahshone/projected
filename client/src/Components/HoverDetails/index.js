import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { userLocation } from '../../appstore/Reducers/UserReducers';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Container, Row, Form } from 'react-bootstrap';
import { truckDistanceFromUser } from '../../Containers/HomeList.js/utils';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export const HoverDetailsComponent = ({ setSelectedTruck, clicked, truckName, truckData }) => {
  const currentLoc = useSelector(userLocation);
  const [leaveReview, setLeaveReview] = useState(false);
  console.log(truckData);

  return (
    <Modal
      show={clicked}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <b>{truckName}</b>
      </Modal.Header>

      <Modal.Header>
        <img className='singleTruckImg' src={truckData.IMG} alt={`${truckData.name}_truck`} />
      </Modal.Header>
      <Modal.Body>
        <Tabs
          defaultActiveKey="profile"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="Info" title="Info">
            <Row>
              <Col>
                M - F 10:00am - 7pm
              </Col>
              <Col>
                open/closed
              </Col>
              <Col>
                distance from you {truckDistanceFromUser(currentLoc, truckData?.coordinates)} miles
              </Col>
            </Row>
             <Row>
                {truckData.description}
              </Row>
          </Tab>
          <Tab eventKey="menu" title="Menu">
            Menu
          </Tab>
          <Tab eventKey="Location" title="Location">
            <Row>
            <Col>
                {truckData.address}
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="contact" title="Contact">
            www.ordernow.com 
            <br/>
            www.ourfoodtruck.com
            <br/>
            phone : email :
          </Tab>
          <Tab eventKey="rate" title="Rate US">
                 <Container>
            <Col xs={12}>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Leave a Review : ⭐⭐⭐⭐⭐</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </Col>
          </Container>
          <Row>
            <Col>
              <Button
                variant='warning'
                className="w-25 float-end"
                onClick={() => {
                  setLeaveReview(false)
                }}
              >Submit</Button>
            </Col>
          </Row>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {
          setSelectedTruck(false)
        }}>Close</Button> 
      </Modal.Footer>
    </Modal>
  );
}


