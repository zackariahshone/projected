import UserState from './Reducers/UserReducers';
import truckSearchState from './Reducers/TruckSearch';

import { configureStore } from '@reduxjs/toolkit'

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userState: UserState,
  truckSearchState: truckSearchState
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
    //add more reducers underneath
})
    
export const persistor = persistStore(store);