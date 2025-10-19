import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import {setFavoriteTruck} from '../../appstore/Reducers/TruckSearch.js';
import { setFavoriteTruck,removeFavoriteTruck } from '../../appstore/Reducers/UserReducers.js';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import {singlgeFoodTruckDistance} from "../../Containers/HomeList.js/utils.js"
import {userLocation, userFavorites,currentUser} from "../../appstore/Reducers/UserReducers.js"
import { getData } from '../../genUtils/requests';

export const HoverDetailsComponent = ({setSelectedTruck, clicked, truckData,truck }) => {

  
  const dispatch = useDispatch();
  const userLatLon = useSelector(userLocation);
  const userFavoritesList = useSelector(userFavorites);
  const userInfo = useSelector(currentUser);

  console.log(userInfo);
  console.log(userLatLon);
  return (
    <Modal
      show={clicked}
      size="lg"
      // aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    { console.log()}
      <Modal.Header>
        <Col>
          {/* <img src={IMG} alt = {`${name}_truck`}/> */}
        </Col>
        <Modal.Title id="contained-modal-title-vcenter">
          <b>{truck.name}</b>
        </Modal.Title>
        <Row>
          <Col>
          </Col>
          <Col>
            open/closed
          </Col>
          <Col>
            distance from you {singlgeFoodTruckDistance(userLatLon,truck.coordinates).toFixed(1)} miles
          </Col>
        </Row>
        <Row>
        </Row>
      </Modal.Header>
      <Modal.Body>
        <Row>
          {/* {description} */}
          <Col 
            onClick={()=>{
              // route, method, body, action, type
              getData(
                  '/setFavoriteTrucks',
                  'POST',
                  {truckData},
                  setFavoriteTruck,
                  '',
                  {'x-access-token':userInfo.authToken}
                  );
              dispatch(setFavoriteTruck(truckData))
            }}
            className = "favHeart"xs = {6}> {userFavoritesList?.includes(truckData) ? '♥':'♡'}  </Col>
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


