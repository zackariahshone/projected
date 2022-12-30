import React, { useEffect,useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { truckSearchList } from '../../appstore/Reducers/TruckSearch';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import './style.css'
// const ckey = require('ckey')
const GeoLoc = navigator.geolocation;
const googleKey = process.env.REACT_APP_GOOGLE_MAPS_API;
export function CustomMap({ google }) {
    const [userLoc, setUserLoc] = useState();
    const foodTruckList = useSelector(truckSearchList)
    GeoLoc.getCurrentPosition((loc)=>{
        setUserLoc(
            {
                lat:loc.coords?.latitude,
                lng:loc.coords?.longitude
            }
        )
    })
    // const getMapConfig =()=>{
        const markerSet = [];
        const nameSet = [];
        foodTruckList.forEach((truck) => {
            if(truck.coordinates){
                const { lat, lon } = truck?.coordinates;
                markerSet.push({ lat: lat, lng: lon })
                nameSet.push({name:truck.name})
            }
        })
        // return {nameSet,markerSet}
    // }
    return (
        <Container>
            <Row>

                <Col xs={3} md={2}>
                            {foodTruckList.map((truck,i)=>{
                               return <p>{truck.name}</p>
                            })}
                </Col>
                <Col xs={0} md={0} >
                    <Map
                        google={google}
                        containerStyle={{
                            width: "70%",
                            height: "90%"
                        }}
                        // style={{
                        //     width: "100%",
                        //     height: "100%"
                        // }}
                        center={markerSet[0]}
                        initialCenter={markerSet[0]}
                        zoom={markerSet.length === 1 ? 18 : 13}
                        disableDefaultUI={true}
                    >
                        {markerSet.map(
                            (coords, i) => <Marker position={coords} title={`${nameSet[i].name}`} />
                        )}
                        {/* lat:GeoLoc.coords?.latitude,
                    lng:GeoLoc.coords?.longitude */
                            console.log(userLoc)
                    }
                        <Marker position={userLoc} title={'you are here'}/>
                    </Map>
                </Col>
            </Row>
        </Container>
    )
};

export default GoogleApiWrapper({
    apiKey: googleKey
})(CustomMap);
