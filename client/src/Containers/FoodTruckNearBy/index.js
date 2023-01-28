import React, { useEffect, useState,Fragment } from 'react';
import { TruckListDisplay } from '../../Components/DisplayListOfTrucks/displayListOfTrucks';
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { truckSearchList } from '../../appstore/Reducers/TruckSearch';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { foodTruckDistance } from './utils';
import { userLocation } from '../../appstore/Reducers/UserReducers'
import ReactSlider from "react-slider";
import truckIcon from './truckIcon.png';
import {SideScroll} from './sideScroll';
import './style.css'

// const googleKey = process.env.REACT_APP_GOOGLE_MAPS_API;
const googleKey =  'AIzaSyBeVD6oESOY60Vzb4LWTWHfzwXfVQxM-Ik';
export function CustomMap({ google }) {
    const foodTruckList = useSelector(truckSearchList);
    const [filteredList, setFilteredList] = useState();
    const [distance, setDistance] = useState(0);
    const currentLoc = useSelector(userLocation);
  
    let markerSet = [];
    let nameSet = [];
    foodTruckList.forEach((truck) => {
        if (truck.coordinates) {
            const { lat, lon } = truck?.coordinates;
            markerSet.push({ lat: lat, lng: lon })
            nameSet.push({ name: truck.name })
        }
    })
    useEffect(() => {
        // if(foodTruckList){
            setFilteredList(foodTruckDistance(distance, currentLoc, foodTruckList))
            if (distance > 0) {
                filteredList?.forEach((truck) => {
                    markerSet = [];
                    nameSet = []
                    if (truck.coordinates) {
                        const { lat, lon } = truck?.coordinates;
                        markerSet.push({ lat: lat, lng: lon })
                        nameSet.push({ name: truck.name })
                    }
                })
            }
        // }
    }, [distance])
    console.log(markerSet);
    console.log(nameSet);
    console.log(filteredList);
    return (
        <Fragment className = "main_div">

        <Container>
        <Row>

                <Col xs={12} >
                  <center> {distance === 0 ? <p> Move slider to filter trucks </p> : <p>Food trucks within {distance} miles of you</p>} </center>
                    <ReactSlider
                        className="customSlider"
                        trackClassName="customSlider-track"
                        thumbClassName="customSlider-thumb"
                        markClassName="customSlider-mark"
                        marks={5}
                        min={0}
                        max={20}
                        defaultValue={0}
                        value={distance}
                        onChange={(value) => setDistance(value)}
                    />
                </Col>
            </Row>
            <Row>
            <Col className={'truckNames'} xs={0} md={3}>
                  <div className='scroll foodTruckList'>
                    {filteredList ? <TruckListDisplay trucks = {filteredList}/> : <TruckListDisplay trucks = {foodTruckList}/>}
                  </div>
            </Col>
                <Col xs={12} md={6} >
                    {markerSet ? <Map
                        google={google}
                        className={'mapContainer'}
                        containerStyle={{
                            width: "50%",
                            height: "65vh"
                        }}
                        center={markerSet[0]}
                        initialCenter={markerSet[0]}
                        zoom={markerSet.length === 1 ? 18 : 13}
                        disableDefaultUI={true}
                    >
                        {markerSet.map(
                            (coords, i) => <Marker
                                 icon={{
                                    url:truckIcon,
                                    anchor:new google.maps.Point(17,46),
                                    scaledSize: new google.maps.Size(50,50)
                                 }}
                                position={coords} 
                                title={`${nameSet[i].name}`} />
                        )}
                        <Marker
                        // icon = {{url:'RiMapPinUserFill'}} 
                        position={currentLoc} 
                        title={'you are here'} />
                    </Map> : <></>}
                </Col>
            </Row>
            <Row>
                    <SideScroll className='stickToBottom'/>
            </Row>
        </Container>
        <Container>
        </Container>
        </Fragment>
    )
};

export default GoogleApiWrapper({
    apiKey: googleKey
})(CustomMap);
