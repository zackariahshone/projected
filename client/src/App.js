import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Checkweather from './Containers/Checkweather';
import Weathertrends from './Containers/Weathertrends';
import Trashtrends from './Containers/Trashtrends';
import StateOfOzone from './Containers/StateOfOzone';
import NavSquares from './Components/NavSquares';

function App() {
  return (
    <Routes>
      <Route
        exact path = '/'
        element = {<NavSquares/>}
        />
      <Route
        exact path='checkweather'
        element={<Checkweather />} 
        />
      <Route
        exact path='weathertrends'
        element={<Weathertrends />} 
        />
      <Route
        exact path='trashtrends'
        element={<Trashtrends />} 
        />
      <Route
        exact path='ozonestatus'
        element={<StateOfOzone />} 

        />
    </Routes>

  );
}

export default App;
