import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
}

export const truckSearchSlice = createSlice({
    name:'TruckSearchState',
    initialState,
    reducers: {
        loadReducer: (state,action)=>{
            // state = state;
            console.log(action.payload.data.listOfTrucks);
            state.listOfTrucks = action.payload.data.listOfTrucks;
        }
    }
})

export const {loadReducer } = truckSearchSlice.actions
export const truckSearchList = (state) => state.truckSearchState.listOfTrucks;
export default truckSearchSlice.reducer