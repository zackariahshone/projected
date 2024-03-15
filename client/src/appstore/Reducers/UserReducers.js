import { createSlice } from '@reduxjs/toolkit'
import { foodTruckDistance } from '../../Containers/HomeList.js/utils'

const initialState = {
}

export const userSlice = createSlice({
  name: 'UserState',
  initialState,
  reducers: {
    login: (state,action) => {
        state.isLoggedIn = action.payload.value
    },
    logout: (state,action) => {
        state.isLoggedIn = action.payload.value
        state.userData = null;
    },
    setUserData:(state,action)=>{
        state.userData = action.payload
    },
    setLocation:(state, action)=>{
        state.userLocation = action.payload
    },
    setFavoriteTruck:(state,action)=>{
      if(state.favorites?.includes(action.payload)){
        state.favorites = state.favorites?.filter((word) => word != action.payload);
        return;
      }
      if(state.favorites == null){
        state.favorites = [action.payload];
      }else{
        const favTrucks = state.favorites;
        favTrucks.push(action.payload);
        state.favorites = favTrucks;
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
  login, 
  logout, 
  setUserData,
  setLocation,
  setFavoriteTruck 
} = userSlice.actions;

export const currentUser = (state)=> state.userState.userData;
export const isLoggedIn = (state) => state.userState.isLoggedIn;
export const userLocation = (state) => state.userState.userLocation;
export const userFavorites = (state) => state.userState.favorites;
export default userSlice.reducer