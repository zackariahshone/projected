import React, { Fragment, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { truckSearchList } from '../../appstore/Reducers/TruckSearch';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import {GOOGLE_MAPS_API} from "../../hiddenvariable";
import './style.css'
// const { env } = require('process');

// require('dotenv').config()

// console.log(process.GOOGLE_MAPS_API)
const googleKey = GOOGLE_MAPS_API ? GOOGLE_MAPS_API:process.env.GOOGLE_MAPS_API;
console.log(googleKey)
export function CustomMap({ google }) {
    // console.log(window);
    // process.env.GOOGLE_MAPS_API;
    const markerSet = [];
    const foodTruckList = useSelector(truckSearchList)
    foodTruckList.forEach((truck) => {
        const { lat, lon } = truck.coordinates;
        markerSet.push({ lat: lat, lng: lon })
    })
    return (
        <Container>
            <Row>

                <Col xs={6} md={6} >
                    <Map
                        google={google}
                        containerStyle={{

                            width: "90%",
                            height: "90%"
                        }}
                        style={{
                            width: "100%",
                            height: "100%"
                        }}
                        center={markerSet[0]}
                        initialCenter={markerSet[0]}
                        zoom={markerSet.length === 1 ? 18 : 13}
                        disableDefaultUI={true}
                    >
                        {markerSet.map(
                            coords => <Marker position={coords} title={'test title'} />
                        )}

                    </Map>
                </Col>
                <Col xs={12} md={6}>
                            <img src='./pin.png' alt='just a big pin'/>
                </Col>
            </Row>
        </Container>
    )
};

export default GoogleApiWrapper({
    // apiKey: process.env.GOOGLE_API_KEY
    apiKey: googleKey
})(CustomMap);

// export const FoodTrucksNearBy = () => {
//     const markerSet = [];
//     const foodTruckList = useSelector(truckSearchList)
//     foodTruckList.forEach((truck) => {
//         console.log(truck);
//         const { lat, lon } = truck.coordinates;
//         markerSet.push(
//             {
//                 markerOffset: -15,
//                 name: truck.name,
//                 coordinates: [lon, lat]
//             }
//         )

//     })

//     return (
//         <Container>
//             <Map google={google} zoom={14}>

//                 <Marker onClick={onMarkerClick}
//                     name={'Current location'} />

//                 <InfoWindow onClose={this.onInfoWindowClose}>
//                     <div>
//                         <h1>{this.state.selectedPlace.name}</h1>
//                     </div>
//                 </InfoWindow>
//             </Map>
//         </Container>
//     )
// };


// export default FoodTrucksNearBy;