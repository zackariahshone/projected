import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
}

export const truckSearchSlice = createSlice({
    name:'TruckSearchState',
    initialState,
    reducers: {
        loadReducer: (state,action)=>{
            // state = state;
            state.listOfTrucks = action.payload.data;
        }
    }
})

export const {loadReducer } = truckSearchSlice.actions
export const truckSearchList = (state) => state.truckSearchState.listOfTrucks;
export default truckSearchSlice.reducer