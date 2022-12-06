import './App.css';
import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom'
import FoodTruckNearBy from './Containers/FoodTruckNearBy';
import NewTrucks from './Containers/NewTrucks/newTrucks';
import RecommendedTrucks from './Containers/RecommendedTrucks';
import TruckSearch from './Containers/TruckSearch/trucksearch';
import NavSquares from './Components/NavSquares/navSquares';
import Login from './Containers/Login/login';
import TopNav from './Containers/TopNav/topNav';
import SignUp from './Containers/Signup/signup'

function App() {
  return (
    <Fragment>

    <TopNav />
    <Routes>
      <Route
         path = '/'
        element = {<NavSquares/>}
        />
      <Route
         path='foodtrucksnearby'
        element={<FoodTruckNearBy />} 
        />
      <Route
         path='newfoodtrucks'
        element={<NewTrucks/>} 
        />
      <Route
         path='trucksearch'
        element={<TruckSearch />} 
        />
      <Route
         path='recommendedtrucks'
        element={<RecommendedTrucks />} 
        />
      <Route 
       path='login'
      element={<Login />}
        />
      <Route
        path='signUp'
        element={<SignUp/>}
      />
    </Routes>
    </Fragment>

  );
}

export default App;
