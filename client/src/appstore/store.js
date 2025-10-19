import UserState from './Reducers/UserReducers';
import truckSearchState from './Reducers/TruckSearch';
import VenderReducers from './Reducers/VenderReducers';
import VenderPortalReducers from './Reducers/VenderPortal';
import SearchFilters from './Reducers/FilterReducers';
import { configureStore } from '@reduxjs/toolkit'
// import {storageSession} from 'reduxjs-toolkit-persist/lib/storage/session'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
// add additional reducers here to build/combine reducers

const persistConfig = {
  key: 'root',
  storage:storage,
  // blacklist:['']
}
const userConfig = {
  key: 'userState',
  storage: storage,
  blacklist: ['userLocation']
};
const rootReducer = combineReducers({
  userState: persistReducer(userConfig,UserState),
  truckSearchState: truckSearchState,
  venderState:VenderReducers,
  venderPortalState:VenderPortalReducers,
  truckSearchFilterState:SearchFilters
})


const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
})
    
export const persistor = persistStore(store);