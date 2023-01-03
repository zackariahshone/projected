import UserState from './Reducers/UserReducers';
import truckSearchState from './Reducers/TruckSearch';
import VenderReducers from './Reducers/VenderReducers';
import { configureStore } from '@reduxjs/toolkit'
// import {storageSession} from 'reduxjs-toolkit-persist/lib/storage/session'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
// add additional reducers here to build/combine reducers
const rootReducer = combineReducers({
  userState: UserState,
  truckSearchState: truckSearchState,
  venderState:VenderReducers
})

const persistConfig = {
  key: 'root',
  storage:storage,
  // blacklist:['truckSearchState']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
})
    
export const persistor = persistStore(store);