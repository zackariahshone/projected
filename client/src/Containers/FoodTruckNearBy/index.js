import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { truckSearchList } from '../../appstore/Reducers/TruckSearch';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { foodTruckDistance } from './utils';
import ReactSlider from "react-slider";
import './style.css'
// const ckey = require('ckey')
const GeoLoc = navigator.geolocation;
const googleKey = process.env.REACT_APP_GOOGLE_MAPS_API;
export function CustomMap({ google }) {
    const [userLoc, setUserLoc] = useState();
    const foodTruckList = useSelector(truckSearchList);
    const[filteredList, setFilteredList]= useState();
    const [distance, setDistance] = useState(0);
    // console.log(foodTruckDistance(5, userLoc, foodTruckList))
    // const getMapConfig =()=>{
    let markerSet = [];
    let nameSet = [];
    foodTruckList.forEach((truck) => {
        if (truck.coordinates) {
            const { lat, lon } = truck?.coordinates;
            markerSet.push({ lat: lat, lng: lon })
            nameSet.push({ name: truck.name })
        }
    })
    if(distance > 0){
        filteredList?.forEach((truck) => {
            markerSet=[];
            nameSet=[]
            if (truck.coordinates) {
                const { lat, lon } = truck?.coordinates;
                markerSet.push({ lat: lat, lng: lon })
                nameSet.push({ name: truck.name })
            }
        })
    }
  
    useEffect(() => {
        GeoLoc.getCurrentPosition((loc) => {
            setUserLoc(
                {
                    lat: loc.coords?.latitude,
                    lng: loc.coords?.longitude
                }
                )
            })
        }, [])
        console.log(distance);
        useEffect(()=>{
            setFilteredList(foodTruckDistance(distance, userLoc, foodTruckList))
        },[distance])
   
    return (
        <Container>
            <Row>
                <Col xs={3} md={2}>
                    <p>FoodTrucks within {distance} miles of you</p>
                    <ReactSlider
                        className="customSlider"
                        trackClassName="customSlider-track"
                        thumbClassName="customSlider-thumb"
                        markClassName="customSlider-mark"
                        marks={5}
                        min={0}
                        max={10}
                        defaultValue={0}
                        value={distance}
                        onChange={(value) => setDistance(value)}
                    />
                    {filteredList?filteredList.map((truck, i) => {
                        return <p>{truck.name}</p>
                    }): foodTruckList.map((truck, i) => {
                        return <p>{truck.name}</p>
                    })}
                </Col>
                <Col xs={0} md={0} >
                
                    {markerSet?<Map
                        google={google}
                        containerStyle={{
                            width: "70%",
                            height: "90%"
                        }}
                        center={markerSet[0]}
                        initialCenter={markerSet[0]}
                        zoom={markerSet.length === 1 ? 18 : 13}
                        disableDefaultUI={true}
                    >
                        {markerSet.map(
                            (coords, i) => <Marker position={coords} title={`${nameSet[i].name}`} />
                        )}
                        <Marker position={userLoc} title={'you are here'} />
                    </Map>:<></>}
                </Col>
            </Row>
        </Container>
    )
};

export default GoogleApiWrapper({
    apiKey: googleKey
})(CustomMap);
