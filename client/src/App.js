import React, { Fragment, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { BROWSER_ROUTER_CONFIGS } from './GlobalConstanst';
import TopNav from './Containers/TopNav/topNav';
import { loadReducer,setCategories } from './appstore/Reducers/TruckSearch';
import {isVender} from './appstore/Reducers/VenderReducers';
import { getData } from './genUtils/requests';
import { useSelector } from 'react-redux';
import './App.css';




function App() {
  const isUserVendor = useSelector(isVender); 
  useEffect(() => {
    getData('api/foodtrucklists', 'GET', {}, loadReducer, {});
    getData('api/getcategories','GET',{},setCategories,{});
}, []);
  return (
    <Fragment>
      <TopNav />
      <Routes>
        {BROWSER_ROUTER_CONFIGS.map((route,i) => {
          if(route.protected && !isUserVendor){
            return(<Fragment key = {`${i}_frag`}/>)
          }
          const Element = route.element;
          
          return (
            <Route
              key={`${route}_${i}`}
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
