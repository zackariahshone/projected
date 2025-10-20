import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { userLocation } from '../../appstore/Reducers/UserReducers';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { truckDistanceFromUser } from '../../Containers/HomeList.js/utils';


export const HoverDetailsComponent = ({ setSelectedTruck, clicked, truckName, truckData }) => {
  const currentLoc = useSelector(userLocation);
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

        <Modal.Title id="contained-modal-title-vcenter">
              <img src={truckData.IMG} alt={`${truckData.name}_truck`} />
        </Modal.Title>
        <Row>
          <Col>
            {truckData.address}
          </Col>
          <Col>
            open/closed
          </Col>
          <Col>
            distance from you {truckDistanceFromUser(currentLoc, truckData?.coordinates)} miles
          </Col>
        </Row>
        <Row>
          {/* been with us since {dateAdded} */}
        </Row>
      <Modal.Body>
        <Row>
          {truckData.description}
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {
          console.log('close this out')
          setSelectedTruck(false)
        }}>Visit Our WebSite</Button>
         <Button onClick={() => {
          console.log('close this out')
          setSelectedTruck(false)
        }}>Leave a Review</Button>
         <Button onClick={() => {
          console.log('close this out')
          setSelectedTruck(false)
        }}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


