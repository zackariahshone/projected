import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const truckSearchFilterSlice = createSlice({
    name:'truckSearchFilterSlice',
    initialState,
    reducers: {
        setFilters:(state, action)=>{
            console.log(action);
            const currentFilters = state.SearchFilterState;
            const newFilters = action.payload
            state.SearchFilterState = { ...currentFilters,...newFilters}
        },
        removeFilters:(state,action)=>{
            // state.selectedFilters
        },
        getFilters:(state,action)=>{
            // state.selectedFilters
        }
    }
})

export const { setFilters,getFilters,removeFilters } = truckSearchFilterSlice.actions;
export const truckSearchList = (state) => state.searchFilterState.selectedFilters;
export default truckSearchFilterSlice.reducer