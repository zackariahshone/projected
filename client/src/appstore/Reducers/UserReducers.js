import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userData',
  initialState: {
  isLoggedIn:false,
  },
  reducers: {
    login: (state,action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.isLoggedIn = action.payload.value
    },
    logout: (state,action) => {
      state.isLoggedIn = action.payload.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, incrementByAmount } = userSlice.actions

export default userSlice.reducer

export const isLoggedIn = (state) => state.UserState