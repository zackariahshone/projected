import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listOfTrucks:[
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
}

export const truckSearchSlice = createSlice({
    name:'TruckSearchState',
    initialState,
    reducers: {
        loadReducer: (state,action)=>{
            state = state;
        }
    }
})

export const {loadReducer } = truckSearchSlice.actions
export const truckSearchList = (state) => state.truckSearchState.listOfTrucks
export default truckSearchSlice.reducer