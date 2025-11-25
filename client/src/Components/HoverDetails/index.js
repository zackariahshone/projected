import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { currentUser, userLocation } from '../../appstore/Reducers/UserReducers';
import { useSelector } from 'react-redux';
import { Col, Container, Row, Form, InputGroup, Card } from 'react-bootstrap';
import { truckDistanceFromUser } from '../../Containers/HomeList.js/utils';
import { getData } from '../../genUtils/requests';
import { ShowStarRating } from '../DisplayListOfTrucks/displayListOfTrucks';
import FoodTruckNearBy from '../../Containers/FoodTruckNearBy/index'
import "./style.css"

export const HoverDetailsComponent = ({ setSelectedTruck, clicked, truckName, truckData }) => {
  return (
    <Modal
      show={clicked}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => setSelectedTruck(false)}
      backdrop={true}
      keyboard={true}
    >
      <Modal.Header closeButton>
        <b>{truckName}</b>
      </Modal.Header>
      <Modal.Header>
        <TruckImage src={truckData.IMG} alt={`${truckData.name}_truck`} />
      </Modal.Header>
      <Modal.Body>
        <TruckCardMiniNav truckData={truckData} />
      </Modal.Body>
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
  const tabs = [
    { label: 'Info', value: 'Info' },
    { label: 'Menu', value: 'Menu' },
    { label: 'Location', value: 'Location' },
    { label: 'Contact', value: 'Contact' },
    { label: 'Reviews', value: 'Reviews' }
  ];

  return (
    <div className="custom-scrollable-tabs">
      <div className="custom-tab-bar-wrapper">
        <div className="custom-tab-bar-gradient left" />
        <div className="custom-tab-bar-gradient right" />
        <div className="custom-tab-bar">
          {tabs.map(tab => (
            <button
              key={tab.value}
              className={`custom-tab-btn${key === tab.value ? ' active' : ''}`}
              onClick={() => setKey(tab.value)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <DisplaySelected selected={key} truckData={truckData} />
    </div>
  );
}

function StarRating({
  userReview,
  setUserReview
}) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  console.log(userReview);

  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((starValue) => (
        <span
          key={starValue}
          style={{ cursor: 'pointer', fontSize: '24px', color: starValue <= (hoverRating || rating) ? 'gold' : 'grey' }}
          onClick={() => {
            setRating(starValue)
            setUserReview({ ...userReview, 'rating': starValue })
          }}
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
  const loggedinUser = useSelector(currentUser);
  const [review, setReview] = useState({});
  const [reviewData, setReviewData] = useState();
 console.log();
 
  useEffect(() => {
    if (!reviewData) {

      const fetchData = async () => {
        try {
          const response = await fetch(`/api/reviews?id=${truckData._id}`); 
          // if (!response.ok) {
          //   throw new Error(`HTTP error! Status: ${response.status}`);
          // }
          const result = await response.json();
          setReviewData(result);
        } catch (error) {
          // setError(error);
        } finally {
          // setLoading(false);
        }
      };
      fetchData();
    }
  }, [reviewData]);
  switch (selected) {
    case 'Info':
      // Code to execute if expression matches value1
      return (
        <Container>
          <Row>
            <Col xs={12} md={3}>
              Hours: M - F 10:00am - 7pm
            </Col>
            <Col xs={12} md={3}>
              Status: open/closed
            </Col>
            <Col xs={12} md={3}>
              Distance from you: {truckDistanceFromUser(currentLoc, truckData?.coordinates)} miles
            </Col>
          </Row>
          <Row>
            {truckData.description}
          </Row>
        </Container>
      );
    case 'Menu':
      // Code to execute if expression matches value2
      return (
        <>
          <h1>working on menu options</h1>
        </>
      )
    case 'Location':
      return (
        <Container>
          <Row>
            <Col>
              {truckData.address}
              <FoodTruckNearBy truck={truckData?.coordinates}/>
            </Col>
          </Row>
        </Container>
      )
    case 'Contact':
      return (
        <>
          <p>www.ordernow.com</p>
          <p>www.ourfoodtruck.com</p>
          <p>phone : email :</p>
        </>
      )
    case 'Reviews':
      return (
        <>
          {reviewData?.reviews?.map((review) => (
            <Card>
              <>{<ShowStarRating rating={review.rating} />}</>
              <>{review.ratingtext}</>
            </Card>
          ))}
          <InputGroup >
            <InputGroup.Text>
              <StarRating
                userReview={review}
                setUserReview={setReview}
              /></InputGroup.Text>
            <Form.Control
              className="reviewField"
              as="textarea"
              aria-label="With textarea"
              onBlur={(e) => {
                setReview({ ...review, 'reviewText': e.target.value })
              }} />
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
                  getData('./api/review', 'POST', {
                    id: truckData._id,
                    ratingID:loggedinUser?._id || null,
                    ...review
                  })
                }}
              >Submit</Button>
            </Col>
          </Row>
        </>
      )
    default:
  }
}

// Placeholder image URL
const PLACEHOLDER_IMG = 'https://media.istockphoto.com/id/1301655857/vector/food-truck-illustration.jpg?s=1024x1024&w=is&k=20&c=GVgNLfVIJFCwH70eMQZd5dRvNbP0F7WcixupUFJtl6g=';

function TruckImage({ src, alt }) {
  const [imgSrc, setImgSrc] = useState(src);
  useEffect(() => { setImgSrc(src); }, [src]);
  return (
    <img
      className='singleTruckImg'
      src={imgSrc || PLACEHOLDER_IMG}
      alt={alt}
      onError={() => setImgSrc(PLACEHOLDER_IMG)}
    />
  );
}