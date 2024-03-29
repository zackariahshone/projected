import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
}

export const truckSearchSlice = createSlice({
    name:'TruckSearchState',
    initialState,
    reducers: {
        loadReducer: (state,action)=>{
            console.log(`is this hit?`);
            state.listOfTrucks = action.payload.data;
        },
        setCategories:(state, action)=>{
            console.log(`is this hit?`);
            state.truckCategories= action.payload.data
        }
    }
})

export const {loadReducer,setCategories } = truckSearchSlice.actions;
export const truckSearchList = (state) => state.truckSearchState.listOfTrucks;
export const truckCategories = (state) => state.truckSearchState.truckCategories;
export default truckSearchSlice.reducer