import React, { useEffect } from 'react';
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from 'react-toastify';

import Header from './components/Header/Header';
import { actGetAuthenticate } from './actions/authenticate.action';

import 'react-toastify/dist/ReactToastify.css';

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
          <ToastContainer />
          <Routes />
        </div>
    </Router>
  );
}

export default App;
