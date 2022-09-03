import React, { useState } from 'react';
import {Container} from 'react-bootstrap'
import './style.css';
// var ctx = document.getElementById("myChart1").getContext("2d");
// console.log(ctx);

const testList = [
    "The Witching Hour",
    "Food Therapy NWA",
    "Foodology Food Truck",
    "Burntsugars Food Truck",
    "Fatt Fingers",
    "Roll & Fold", 
    "Boondocks Grill",
    "City Pump",
    "Takashimura Hibachi - Rogers",
    "T-Mo's cajun Cookin"
]  


const FoodTruckSearch = () => {

    const [truckList, setTruckList] = useState(testList);

   const displaySearch = (searchTerm)=>{
        console.log(searchTerm);
   } 

    return (
        <Container>
            <div id = 'searchInput'>
                <input
                    onChange={(e)=>{
                        displaySearch(e);
                    }}
                />
            </div>
            <div id = 'searchResults'>
            <ui>

                {
                    truckList.map((truck , i)=>(
                        <li>
                            {truck}
                        </li>
                    ))
                }
            </ui>
            </div>
        </Container>
    )
}

export default FoodTruckSearch;