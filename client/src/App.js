import React, { Fragment, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'
import { BROWSER_ROUTER_CONFIGS } from './GlobalConstanst';
import { loadReducer, setCategories } from './appstore/Reducers/TruckSearch';
import { isVender } from './appstore/Reducers/VenderReducers';
import { setLocation } from './appstore/Reducers/UserReducers';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from './genUtils/requests';
import './App.css';




function App() {

  const isUserVendor = useSelector(isVender);
  const GeoLoc = navigator.geolocation;
  const dispatch = useDispatch();
 
  
  useEffect(() => {
    getData('api/foodtrucklists', 'GET', {}, loadReducer, {});
    getData('api/getcategories', 'GET', {}, setCategories, {});
    GeoLoc.getCurrentPosition((loc) => {
      console.log('location set');
      
      dispatch(setLocation(
        {
          lat: loc.coords?.latitude,
          lng: loc.coords?.longitude
        }
      ))
    })
  }, []);
  return (
    <Fragment>
      <Routes>
        {BROWSER_ROUTER_CONFIGS.map((route, i) => {
          if (route.protected && !isUserVendor) {
            return (<Fragment key={`${i}_frag`} />)
          }
          const Element = route.element;
          return (
            <Route
              key={`${route}_${i}`}
              path={route.path}
              element={<Element />}
            />
          )
        })}
      </Routes>
    </Fragment>

  );
}

export default App;
