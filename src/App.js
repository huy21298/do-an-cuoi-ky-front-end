import React, { useEffect } from 'react';
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from './components/Header/Header';


import { actGetAuthenticate } from './actions/authenticate.action';

function App() {
  const authenticate = useSelector(state => state.authenticate);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actGetAuthenticate())
  }, [])
  return (
    <Router>
      <div className="App">
        {authenticate && <Header />}
        <Routes />
      </div>
    </Router>
  );
}

export default App;
