import { createSlice } from '@reduxjs/toolkit'

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
    
    },
    setUserData:(state,action)=>{
        state.userData = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, setUserData } = userSlice.actions;
export const currentUser = (state)=> state.userState.userData;
export const isLoggedIn = (state) => state.userState.isLoggedIn;
export default userSlice.reducer