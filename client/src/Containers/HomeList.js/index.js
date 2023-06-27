import React, { useEffect, useState } from 'react';
import { TruckListDisplay } from '../../Components/DisplayListOfTrucks/displayListOfTrucks';
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { truckSearchList } from '../../appstore/Reducers/TruckSearch';
import TruckSearchFilterButtons from '../TruckSearch/truckSearchFilterButtons';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { foodTruckDistance } from './utils';
import { userLocation } from '../../appstore/Reducers/UserReducers'
import ReactSlider from "react-slider";
import './style.css'
import truckIcon from './truckIcon.png'
// import SearchFilterButtons from '../../GlobalConstanst'
const SearchFilterButtons = ['Recommended For You', 'Favorites', 'Closest', 'Newest'];
const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_MAPS_API;
// const GOOGLE_KEY = 'AIzaSyBTFMucVzXh_M89AV3bPS0H9dM9Wy0Y';
const dummyFilters = ['vegan', 'thai', '4/5 stars', 'with in 15mile'];
export function CustomMap({ google }) {
    const foodTruckList = useSelector(truckSearchList);
    const [filteredList, setFilteredList] = useState();
    const [distance, setDistance] = useState(0);
    const [mainSearch, setMainSearch] = useState('')
    const [truckList, setTruckList] = useState(foodTruckList);
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
        const result = foodTruckList?.filter(truck => truck.name.toLowerCase().includes(mainSearch.toLowerCase()));
        mainSearch !== '' ? setFilteredList(result) : setFilteredList(foodTruckList);
    }, [mainSearch])
    // useEffect(() => {
    //     // if(foodTruckList){
    //         setFilteredList(foodTruckDistance(distance, currentLoc, foodTruckList))
    //         if (distance > 0) {
    //             filteredList?.forEach((truck) => {
    //                 markerSet = [];
    //                 nameSet = []
    //                 if (truck.coordinates) {
    //                     const { lat, lon } = truck?.coordinates;
    //                     markerSet.push({ lat: lat, lng: lon })
    //                     nameSet.push({ name: truck.name })
    //                 }
    //             })
    //         }
    //     // }
    // }, [distance])
    console.log(markerSet);
    console.log(nameSet);
    console.log(filteredList);
    return (
        <>
        <Container style = {{
                            marginBottom: "2%",
                            marginRight:"3%"
                        }}>
        <Row>
           <Col xs={4}>
                <input 
                    className = 'truckSearchBar'
                    onChange={(e) => {
                    setMainSearch(e.target.value)
                }}
                    ></input></Col><Col xs = {3}><button>GO!</button></Col>
        </Row>
        <Row>
           <Col><button className = 'edit'>Edit Filters</button>  {dummyFilters.map((filter)=><button className = {'filterButtons'}>{filter}</button>)}</Col>
        </Row>
        <Row>
           <Col>{SearchFilterButtons.map((filter)=><button className = {'PrimaryFilterButtons'}>{filter}</button>)}</Col>
        </Row>






        </Container>
        <Container>
        {/* <Row>
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
            </Row> */}
            <Row>
            {/* <Col className={'truckNames'}> */}
                  <div className=' scroll foodTruckList'>
                    {filteredList ? <TruckListDisplay trucks = {filteredList}/> : <TruckListDisplay trucks = {foodTruckList}/>}
                  </div>
            {/* </Col> */}
                {/* <Col xs={0} md={6} >
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
                </Col> */}
            </Row>
        </Container>
        </>
    )
};

export default GoogleApiWrapper({
    apiKey: GOOGLE_KEY
})(CustomMap);
