import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { userLocation } from '../../appstore/Reducers/UserReducers';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Container, Row, Form, InputGroup, Card } from 'react-bootstrap';
import { truckDistanceFromUser } from '../../Containers/HomeList.js/utils';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { getData } from '../../genUtils/requests';
import "./style.css"
import { ShowStarRating } from '../DisplayListOfTrucks/displayListOfTrucks';
import FoodTruckNearBy from '../../Containers/FoodTruckNearBy/index'

export const HoverDetailsComponent = ({ setSelectedTruck, clicked, truckName, truckData }) => {
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

  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        fill
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
        <Tab eventKey="Reviews" title="Reviews" >
          Reviews
        </Tab>
      </Tabs>
      <DisplaySelected selected={key} truckData={truckData} />
    </>
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
  const [review, setReview] = useState({});
  const [reviewData, setReviewData] = useState();
  useEffect(() => {
    if (!reviewData) {

      const fetchData = async () => {
        try {
          const response = await fetch(`/api/reviews?id=${truckData._id}`); // Replace with your actual API endpoint
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
                  console.log(truckData);

                  console.log({ [truckData._id]: { ...review } });
                  getData('./api/review', 'POST', {
                    id: truckData._id,
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


// function SingleTruckMapPoint({truckLocation,google}) {
//   const currentLoc = useSelector(userLocation);

  
//   return(

//     <Map
//     google={google}
//     // className={'mapContainer'}
//     containerStyle={{
//       // width: "50%",
//       // height: "65vh"
//     }}
//     center={currentLoc}
//     // initialCenter={markerSet[0]}
//     // zoom={markerSet.length === 1 ? 18 : 13}
//     disableDefaultUI={true}
//     >
//     {/* {markerSet.map(
//       (coords, i) => <Marker
//         icon={{
//           url: truckIcon,
//           anchor: new google.maps.Point(17, 46),
//           scaledSize: new google.maps.Size(50, 50)
//         }}
//         position={coords}
//         title={`${nameSet[i].name}`} />
//     )} */}
//     <Marker
//       // icon = {{url:'RiMapPinUserFill'}} 
//       position={currentLoc}
//       title={'you are here'} />
//   </Map>
// )
// }
// const GOOGLE_KEY = 'AIzaSyBsmkoBaVsoBXyrBUxE7kpMJaIJ9HU-9CA';

// GoogleApiWrapper({
//     apiKey: GOOGLE_KEY
// })(SingleTruckMapPoint);