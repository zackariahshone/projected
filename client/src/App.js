import React, { Fragment, useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom'
import { BROWSER_ROUTER_CONFIGS } from './GlobalConstanst';
import { loadReducer, setCategories } from './appstore/Reducers/TruckSearch';
import { isVender } from './appstore/Reducers/VenderReducers';
import { setLocation } from './appstore/Reducers/UserReducers';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from './genUtils/requests';

import './App.css';





function App() {
  const [permissions, setPermissions] = useState();
  const [ipAddress,setIPAddress] = useState();
  const isUserVendor = useSelector(isVender);
  const GeoLoc = navigator.geolocation;
  const dispatch = useDispatch();
 
  
  function handlePermission() {
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      // console.log(result);
      if (result.state === "granted") {
        report(result.state);
        setPermissions(result.state);
        // geoBtn.style.display = "none";
      } else if (result.state === "prompt") {
        report(result.state);
        setPermissions(result.state);
        // geoBtn.style.display = "none";
      } else if (result.state === "denied") {
        report(result.state);
        setPermissions(result.state);

        fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
          // console.log(data);
          setIPAddress(data.ip)
        })
        .catch(error => console.log(error));
        
      }
      result.addEventListener("change", () => {
        report(result.state);
      });
    });
  }
  
  function report(state) {
    // console.log(`Permission ${state}`);
  }
  
  

  useEffect(() => {
    getData('api/foodtrucklists', 'GET', {}, loadReducer, {});
    
    getData('api/getcategories', 'GET', {}, setCategories, {});

    handlePermission();
    if(permissions != 'denied'){
      GeoLoc.getCurrentPosition((loc) => {
        // console.log(loc);
        // console.log(loc.coords?.latitude);
      dispatch(setLocation(
        {
          lat: loc.coords?.latitude,
          lng: loc.coords?.longitude
        }
      ))
    });
  }else{
    // get close enougn location
    dispatch(setLocation(
      {
        lat: '0',
        lng: '0'
      }
    ))
  }
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
