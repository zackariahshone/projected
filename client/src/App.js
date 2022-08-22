import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import FoodTruckNearBy from './Containers/FoodTruckNearBy';
import NewTrucks from './Containers/NewTrucks';
import Trashtrends from './Containers/Trashtrends';
import RecommendedTrucks from './Containers/RecommendedTrucks';
import NavSquares from './Components/NavSquares';

function App() {
  return (
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
        element={<Trashtrends />} 
        />
      <Route
        exact path='recommendedtrucks'
        element={<RecommendedTrucks />} 

        />
    </Routes>

  );
}

export default App;
