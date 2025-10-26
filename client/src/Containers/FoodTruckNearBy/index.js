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
    
    return (
        <div
                    style={{
                        width: "100%", // or you can use width: '100vw'
                        height: "50vh", // or you can use height: '100vh'
                    }}
                >
                    {markerSet ? <Map
                        google={google}
                        // className={'mapContainer'}
                        containerStyle={{
                            width: "80%",
                            height: "80%"
                        }}
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
                    </div>
               
    )
};

export default GoogleApiWrapper({
    apiKey: GOOGLE_KEY
})(CustomMap);
