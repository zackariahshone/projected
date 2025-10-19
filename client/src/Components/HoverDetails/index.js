import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useSelector, useDispatch } from 'react-redux';
import { Col, Row } from 'react-bootstrap';


export const HoverDetailsComponent = ({ setSelectedTruck, clicked, truckName, truckData }) => {
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
            {/* {address} */}
          </Col>
          <Col>
            open/closed
          </Col>
          <Col>
            distance from you 00 miles
          </Col>
        </Row>
        <Row>
          {/* been with us since {dateAdded} */}
        </Row>
      <Modal.Body>
        <Row>
          {/* {description} */}
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {
          console.log('close this out')
          setSelectedTruck(false)
        }}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


