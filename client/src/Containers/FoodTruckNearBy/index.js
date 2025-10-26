import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { truckSearchList } from '../../appstore/Reducers/TruckSearch';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { userLocation } from '../../appstore/Reducers/UserReducers'




const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_MAPS_API;
// const GOOGLE_KEY = 'AIzaSyBTFMucVzXh_M89AV3bPS0H9dM9Wy0Y';

export function CustomMap({ google, truck }) {
    const foodTruckList = useSelector(truckSearchList);
    const [filteredList, setFilteredList] = useState();
    const currentLoc = useSelector(userLocation);
    
    let markerSet = [];
    let nameSet = [];
    
    useEffect(() => {
                filteredList?.forEach((truck) => {
                    markerSet = [];
                    nameSet = []
                    if (truck.coordinates) {
                        const { lat, lon } = truck?.coordinates;
                        markerSet.push({ lat: lat, lng: lon })
                        nameSet.push({ name: truck.name })
                    }
                })
    }, [])
    return (
        <Container>
            <Row>
                <Col xs={0} md={6} >
                    {markerSet ? <Map
                        google={google}
                        // className={'mapContainer'}
                        // containerStyle={{
                        //     width: "50%",
                        //     height: "65vh"
                        // }}
                        center={currentLoc}
                        initialCenter={currentLoc}
                        zoom={markerSet.length === 1 ? 18 : 13}
                        disableDefaultUI={true}
                    >
                        {/* {markerSet.map(
                            (coords, i) => <Marker
                                position={coords} 
                                title={`${nameSet[i].name}`} />
                        )} */}
                        <Marker 
                        position={{lat:truck?.lat,lng:truck?.lon}}
                        />
                        <Marker
                        position={currentLoc} 
                        title={'you are here'} />
                    </Map> : <></>}
                </Col>
            </Row>
        </Container>
    )
};

export default GoogleApiWrapper({
    apiKey: GOOGLE_KEY
})(CustomMap);
