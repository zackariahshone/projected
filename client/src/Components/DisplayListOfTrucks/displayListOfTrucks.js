import React, { Fragment, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";
import { HoverDetailsComponent } from "../HoverDetails";
import parse from 'html-react-parser';

export const TruckListDisplay = ({ trucks }) => {
    const [selectedTruck, setSelectedTruck] = useState(false);
    const [truckKey, setTruckKey] = useState('');
    const [truckData, setTruckData] = useState('');
    const [showRating, setShowRating] = useState(false);
    return (
        <>
            {trucks ? trucks.map((truck) => (
                <>
                    <Row className='singleTruck'
                        onClick={(e) => {
                            selectedTruck === true ? setSelectedTruck(false) : setSelectedTruck(true);
                            setTruckKey(truck.name);
                            setTruckData(truck);
                        }}
                    >
                        <Row
                            className={'displayTruckDetails scroll'}
                        >
                            <Col><b>{truck.name}</b></Col>
                            <Col>open</Col>
                            <Col>{ truck?.rating >= 0 ? <ShowStarRating 
                                                            setShowRating={setShowRating} 
                                                            showRating={showRating} 
                                                            rating = {truck.rating}/> : 'give us a review!' }</Col>
                        </Row>
                    </Row>
                </>
            )) : 'trucks empty'}
            {truckData ?
                <HoverDetailsComponent setSelectedTruck={setSelectedTruck} clicked={selectedTruck} truckName={truckKey} truckData={truckData} />
                : <></>
            }

        </>
    )
}



export const ShowStarRating =({rating})=>{
    const fullStars = Math.floor(rating || 0);
    const hasHalf = (rating - fullStars) >= 0.5;
    const total = 5;

    const gradId = `halfGradient_${Math.random().toString(36).slice(2,9)}`;
    const strokeFilled = '#B8860B'; // darker goldenrod for contrast
    const strokeEmpty = '#C0C0C0'; // light gray for empty stars
    const Star = ({ type, index }) => {
        // SVG star; for half we use the gradient defined with gradId
        const fill = type === 'full' ? '#FFD700' : (type === 'half' ? `url(#${gradId})` : 'none');
        const stroke = type === 'empty' ? strokeEmpty : strokeFilled;
        return (
            <svg key={index} width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{marginRight:4}} aria-hidden>
                <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" fill={fill} stroke={stroke} strokeWidth="0.8" />
            </svg>
        )
    }

    const stars = [];
    for (let i = 0; i < total; i++) {
        if (i < fullStars) stars.push(<Star key={i} type="full" index={i} />)
        else if (i === fullStars && hasHalf) stars.push(<Star key={i} type="half" index={i} />)
        else stars.push(<Star key={i} type="empty" index={i} />)
    }

    // defs svg provides the half-gradient referenced by stars
    const defsSvg = (
        <svg width="0" height="0" style={{position:'absolute'}} aria-hidden>
            <defs>
                <linearGradient id={gradId} x1="0" x2="1">
                    <stop offset="50%" stopColor="#FFD700" />
                    <stop offset="50%" stopColor="transparent" />
                </linearGradient>
            </defs>
        </svg>
    );

    return (
        <div className="ratingDiv" style={{display:'flex', alignItems:'center', position:'relative'}} aria-label={`${rating} out of 5 stars`}>
            {defsSvg}
            {stars}
        </div>
    )
}