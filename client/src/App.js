import './App.css';
import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom'
import FoodTruckNearBy from './Containers/FoodTruckNearBy';
import NewTrucks from './Containers/NewTrucks';
import RecommendedTrucks from './Containers/RecommendedTrucks';
import TruckSearch from './Containers/TruckSearch';
import NavSquares from './Components/NavSquares';
import Login from './Containers/Login';
import TopNav from './Containers/TopNav';

function App() {
  return (
    <Fragment>

    <TopNav />
    <Routes>
      <Route
        exact path = '/'
        element = {<NavSquares/>}
        />
      <Route
        exact path='foodtrucksnearby'
        element={<FoodTruckNearBy />} 
        />
      <Route
        exact path='newfoodtrucks'
        element={<NewTrucks data={[1,2,3]} />} 
        />
      <Route
        exact path='trucksearch'
        element={<TruckSearch />} 
        />
      <Route
        exact path='recommendedtrucks'
        element={<RecommendedTrucks />} 
        />
      <Route 
      exact path='login'
      element={<Login />}
        />
    </Routes>
    </Fragment>

  );
}

export default App;
