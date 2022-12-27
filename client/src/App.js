import React, { Fragment, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { BROWSER_ROUTER_CONFIGS } from './GlobalConstanst';
import TopNav from './Containers/TopNav/topNav';
import { loadReducer,setCategories } from './appstore/Reducers/TruckSearch';
import { getData } from './genUtils/requests';

import './App.css';




function App() {
  useEffect(() => {
    getData('api/foodtrucklists', 'GET', {}, loadReducer, {});
    getData('api/getcategories','GET',{},setCategories,{});
}, []);
  return (
    <Fragment>
      <TopNav />
      <Routes>

        {BROWSER_ROUTER_CONFIGS.map((route) => {
          const Element = route.element;
          return (
            <Route
              path={route.path}
              element={<Element/>}
            />
          )
        })}
      </Routes>
    </Fragment>

  );
}

export default App;
