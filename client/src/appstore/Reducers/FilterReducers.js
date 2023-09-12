import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
}

export const truckSearchFilterSlice = createSlice({
    name:'TruckSearchFilters',
    initialState,
    reducers: {
        setFilters:(state, action)=>{
            state.selectedFilters= action.payload.data
        },
        removeFilters:(state,action)=>{
            state.selectedFilters
        },
        getFilters:(state,action)=>{
            state.selectedFilters
        }
    }
})

export const {setFilters,getFilters,removeFilters } = truckSearchSlice.actions;
export const truckSearchList = (state) => state.searchFilterState.selectedFilters;
export default truckSearchFilterSlice.reducer