import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { userLocation } from '../../appstore/Reducers/UserReducers';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Container, Row, Form, InputGroup } from 'react-bootstrap';
import { truckDistanceFromUser } from '../../Containers/HomeList.js/utils';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./style.css"
export const HoverDetailsComponent = ({ setSelectedTruck, clicked, truckName, truckData }) => {
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
      {/* <Modal.Body> */}
      <TruckCardMiniNav truckData={truckData} />
      {/* <Tabs
        defaultActiveKey="Info"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab.Pane eventKey="Info" title="Info">

        </Tab.Pane>
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
          <br />
          www.ourfoodtruck.com
          <br />
          phone : email :
        </Tab>
        <Tab eventKey="rate" title="Rate US">
        

          <InputGroup >

            <InputGroup.Text><StarRating /></InputGroup.Text>
            <Form.Control className="reviewField" as="textarea" aria-label="With textarea" />
          </InputGroup>
          <Row
            className='justify-content-end'
          >
            <Col
              xs={3}
            >
              <Button
                variant='warning'
                className=" float-end"
                onClick={() => {
                  setLeaveReview(false)
                }}
              >Submit</Button>
            </Col>
          </Row>
        </Tab>
      </Tabs> */}
      <Modal.Footer>
        <Button onClick={() => {
          setSelectedTruck(false)
        }}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function TruckCardMiniNav({ truckData }) {
  const [key, setKey] = useState('Info');

  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="Info" title="Info">
          Info
        </Tab>
        <Tab eventKey="Menu" title="Menu">
          Menu
        </Tab>
        <Tab eventKey="Location" title="Location" >
          Location
        </Tab>
        <Tab eventKey="Contact" title="Contact" >
          Contact
        </Tab>
        <Tab eventKey="Review" title="Review" >
          Review
        </Tab>
      </Tabs>
      <DisplaySelected selected={key} truckData={truckData} />
    </>
  );
}

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((starValue) => (
        <span
          key={starValue}
          style={{ cursor: 'pointer', fontSize: '24px', color: starValue <= (hoverRating || rating) ? 'gold' : 'grey' }}
          onClick={() => setRating(starValue)}
          onMouseEnter={() => setHoverRating(starValue)}
          onMouseLeave={() => setHoverRating(rating)}
        >
          &#9733;
        </span>
      ))}
      <p>Rating : {rating}</p>
    </div>
  );
}


function DisplaySelected({ selected, truckData }) {
    const currentLoc = useSelector(userLocation);

  switch (selected) {
    case 'Info':
      // Code to execute if expression matches value1
      return (
        <>
      <Row>
            <Col xs={3}>
              M - F 10:00am - 7pm
            </Col>
            <Col xs={3}>
              open/closed
            </Col>
            <Col xs={3}>
              distance from you {truckDistanceFromUser(currentLoc, truckData?.coordinates)} miles
            </Col>
          </Row>
          <Row>
            {truckData.description}
          </Row>
        </>
      );
    case 'Menu':
      // Code to execute if expression matches value2
      <>
        <h1>working on menu options</h1>
      </>
      break;
    case 'Location':
      return(
        <>
        <Row>
            <Col>
              {truckData.address}
            </Col>
          </Row>
        </>
      )
    case 'Contact':
      return(
        <>
          <p>www.ordernow.com</p> 
          <p>www.ourfoodtruck.com</p> 
          <p>phone : email :</p>
        </>
      )
    case 'Review':
      return(
        <>
            <InputGroup >

            <InputGroup.Text><StarRating /></InputGroup.Text>
            <Form.Control className="reviewField" as="textarea" aria-label="With textarea" />
          </InputGroup>
          <Row
            className='justify-content-end'
          >
            <Col
              xs={3}
            >
              <Button
                variant='warning'
                className=" float-end"
              >Submit</Button>
            </Col>
          </Row>
        </>
      )    // ... more cases
    default:
    // Code to execute if expression does not match any case
  }
}
