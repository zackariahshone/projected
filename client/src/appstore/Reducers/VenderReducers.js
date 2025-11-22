import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVender:false,
    truckCredintials:{}
}

export const venderSlice = createSlice({
    name:'VenderState',
    initialState,
    reducers: {
        setVenderCred: (state,action)=>{
            state.isVender = action.payload.vender;
            state.truckCredintials = action.payload.venderdata;
        },
        setTruckData:(state, action)=>{
            // action.payload should be the created truck object
            const truck = action.payload;
            if (!state.truckCredintials) state.truckCredintials = {};
            if (!Array.isArray(state.truckCredintials.foodtrucks)) {
                state.truckCredintials.foodtrucks = [];
            }
            // push new truck id if present, otherwise push object
            if (truck && truck._id) {
                state.truckCredintials.foodtrucks.push(truck._id);
            } else if (truck) {
                state.truckCredintials.foodtrucks.push(truck);
            }
        },
        venderLogout: (state,action)=>{
            state.isVender = false;
            state.truckCredintials = {};
        },
    }
})

export const { setVenderCred, setTruckData, venderLogout } = venderSlice.actions

export const isVender = (state)=> state.venderState.isVender;
export const isLoggedIn = (state) => state.venderState.truckCredintials;
export default venderSlice.reducer