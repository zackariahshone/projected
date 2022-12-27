import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { truckSearchList } from '../../appstore/Reducers/TruckSearch';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import './style.css'
// const ckey = require('ckey')
const googleKey = process.env.REACT_APP_GOOGLE_MAPS_API;
export function CustomMap({ google }) {
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
    apiKey: googleKey
})(CustomMap);
