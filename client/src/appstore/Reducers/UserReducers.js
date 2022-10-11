import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'UserState',
  initialState: {
  isLoggedIn:null,
  
  },
  reducers: {
    login: (state,action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state = {...state,
            isLoggedIn:action.payload.value
        }
    },
    logout: (state,action) => {
      state = {...state,
                isLoggedIn: action.payload.value
    }
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, incrementByAmount } = userSlice.actions

export const isLoggedIn = (state) => state.UserState

export default userSlice.reducer