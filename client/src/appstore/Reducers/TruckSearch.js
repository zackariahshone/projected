import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
}

export const truckSearchSlice = createSlice({
    name:'TruckSearchState',
    initialState,
    reducers: {
        loadReducer: (state, action)=>{
            state.listOfTrucks = action.payload.data;
        },
        setCategories:(state, action)=>{
            state.truckCategories= action.payload.data
        },
        setFavoriteTruck:(state, action)=>{
            console.log(action.payload);
        }
    }
})

export const {loadReducer,setCategories,setFavoriteTruck } = truckSearchSlice.actions;
export const truckSearchList = (state) => state.truckSearchState.listOfTrucks;
export const truckCategories = (state) => state.truckSearchState.truckCategories;
export default truckSearchSlice.reducer