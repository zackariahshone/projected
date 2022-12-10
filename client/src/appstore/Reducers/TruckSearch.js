import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
}

export const truckSearchSlice = createSlice({
    name:'TruckSearchState',
    initialState,
    reducers: {
        loadReducer: (state,action)=>{
            state.listOfTrucks = action.payload.data;
        },
        setCategories:(state, action)=>{
            // state = {
            //     ...state,
            //     truckCategories:[...action.payload.data]
            // }
            state.truckCategories= action.payload.data
        }
    }
})

export const {loadReducer,setCategories } = truckSearchSlice.actions
export const truckSearchList = (state) => state.truckSearchState.listOfTrucks;
export const truckCategories = (state) => state.truckSearchList.truckCategories;
export default truckSearchSlice.reducer