import React, { useEffect, useState } from 'react';
import { TruckListDisplay } from '../../Components/DisplayListOfTrucks/displayListOfTrucks';
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';

import { truckSearchList } from '../../appstore/Reducers/TruckSearch';
import TruckSearchFilterButtons from '../TruckSearch/truckSearchFilterButtons';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { foodTruckDistance } from './utils';
import { userLocation } from '../../appstore/Reducers/UserReducers'
import ReactSlider from "react-slider";
import { FilterModal } from '../../Components/FiltersModal/index'
import truckIcon from './truckIcon.png'
import { setFilters, getFilters, removeFilters,removeFilter,truckSearchFilters} from '../../appstore/Reducers/FilterReducers';
import './style.css'
const SearchFilterButtons = ['Recommended For You', 'Favorites', 'Closest', 'Newest'];
const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_MAPS_API;
// const GOOGLE_KEY = 'AIzaSyBTFMucVzXh_M89AV3bPS0H9dM9Wy0Y';
export function CustomMap({ google }) {
    const foodTruckList = useSelector(truckSearchList);
    const [filteredList, setFilteredList] = useState();
    const [mainSearch, setMainSearch] = useState('')
    const [truckList, setTruckList] = useState(foodTruckList);
    const currentLoc = useSelector(userLocation);
    const dispatch = useDispatch();

    const truckSearchFilterList = useSelector(truckSearchFilters);
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
    return (
        <>
            <Container style={{
                marginBottom: "2%",
                marginRight: "3%"
            }}>
                <Row>

                    <Col xs={4}>
                        <input
                            placeholder="type to search food truck titles"
                            className='truckSearchBar'
                            onChange={(e) => {
                                setMainSearch(e.target.value)
                            }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FilterModal />
                        {truckSearchFilterList !== null && truckSearchFilterList !== undefined ? Object.keys(truckSearchFilterList)?.map(filterKey => (
                            (
                                <>
                                    <text> <b>{filterKey}:</b></text>

                                    {truckSearchFilterList[filterKey]?.map(filterItem => (
                                        <>
                                            <text className={'filterButtons'}>{filterItem}
                                                <span onClick={()=>{
                                                    console.log({[filterKey]:filterItem})
                                                    dispatch(removeFilter({[filterKey]:filterItem}))
                                                }} className='delete'>x</span>
                                            </text>
                                        </>
                                    ))}
                                </>
                            )
                        )) : ""}
                    </Col>
                </Row>
                <Row>
                    <Col>{SearchFilterButtons.map((filter) => <button className={'PrimaryFilterButtons'}>{filter}</button>)}</Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    {/* <Col className={'truckNames'}> */}
                    <div className=' scroll foodTruckList'>
                        {filteredList ? <TruckListDisplay trucks={filteredList} /> : <TruckListDisplay trucks={foodTruckList} />}
                    </div>
                    {/* below is commented out google maps code */}
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
