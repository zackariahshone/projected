import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { truckSearchList } from '../../appstore/Reducers/TruckSearch';
import './style.css'
// import { Doughnut } from 'react-chartjs-2';


// var ctx = document.getElementById("myChart1").getContext("2d");
const NewTrucks = () => {
  const foodTruckList = useSelector(truckSearchList)

    return (
       <Container>
        <Row>
        {foodTruckList.map((truck)=>{
          return(

            <Col xs={12} md={4} lg={3}>
              <p>{truck.name}</p>
              <img 
                src={truck.IMG} 
                alt={'truckImg'}/>
            </Col>
          )
        })}

        </Row>
       </Container>
    )
}

export default NewTrucks;