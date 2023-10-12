import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useSelector, useDispatch } from 'react-redux';
import { Col, Row } from 'react-bootstrap';


export const HoverDetailsComponent = ({setSelectedTruck, clicked, truckData }) => {
  return (
    <Modal
      show={clicked}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Col>
          {/* <img src={IMG} alt = {`${name}_truck`}/> */}
        </Col>
        <Modal.Title id="contained-modal-title-vcenter">
          <b>{truckData}</b>
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
      </Modal.Header>
      <Modal.Body>
        <Row>
          {/* {description} */}
        </Row>
      </Modal.Body>
      <Modal.Footer>
      <Button onClick={()=>{
        console.log('close this out')
        setSelectedTruck(false)
      }}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


