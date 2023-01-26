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