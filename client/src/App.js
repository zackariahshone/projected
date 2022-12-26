import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom'
import { BROWSER_ROUTER_CONFIGS } from './GlobalConstanst';
import TopNav from './Containers/TopNav/topNav';
import './App.css';




function App() {
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
