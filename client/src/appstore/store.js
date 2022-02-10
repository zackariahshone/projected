import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reactSlice'

export default configureStore({
  reducer: {
    counter:counterReducer
  },
})