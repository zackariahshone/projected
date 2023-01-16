import { createSlice } from "@reduxjs/toolkit";

const initialState = {
}

export const venderPortalSlice = createSlice({
    name:'VenderPortalReducers',
    initialState,
    reducers: {
        setTruckToEdit: (state,action)=>{
          console.log(action);
            state.truckBeingEdited = action.payload;
        },
    }
})

export const { setTruckToEdit } = venderPortalSlice.actions

export const truckToEdit = (state)=> state.venderPortalState.truckBeingEdited;
export default venderPortalSlice.reducer