import UserState from './Reducers/UserReducers';
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    UserState,
    //add more reducers underneath
  },
})
    
    