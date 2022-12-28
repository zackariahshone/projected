import React,{Fragment} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { truckSearchList } from '../../appstore/Reducers/TruckSearch';
import {sortByDate} from '../../genUtils'
import './style.css'
// import { Doughnut } from 'react-chartjs-2';


// var ctx = document.getElementById("myChart1").getContext("2d");
const NewTrucks = () => {
  const foodTruckList = useSelector(truckSearchList)
  console.log(foodTruckList);
    return (
       <Container>
        <Row>
        {foodTruckList.map((truck)=>{
          return(
            <Fragment>

            <Col xs={6} md={2} lg={2}>
              <img 
                src={truck.IMG} 
                alt={'truckImg'}
                />
            </Col>
            <Col
             xs={6} md={2} lg={2}
            >
            <div
              class = 'truckDetails'
            >
              <ul>
                  <li>{truck.name}</li>
                  <li>{truck.address}</li>
                  <li>{truck.description}</li>
              </ul>
            </div>
            </Col>
            </Fragment>
          )
        })}

        </Row>
       </Container>
    )
}

export default NewTrucks;