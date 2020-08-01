import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import Header from './components/Header/Header';
import LoginPage from './pages/LoginPage';
import ClassesListPage from './pages/ClassesListPage';
import ClassRoomPage from './pages/ClassRoomPage';

import { actGetAuthenticate } from './actions/authenticate.action';

function App() {
  const authenticate = useSelector(state => state.authenticate);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actGetAuthenticate())
  }, [])
  return (
    <div className="App">
      {authenticate && <Header />}
     <LoginPage />
     {/* <ClassesListPage /> */}
     {/* <ClassRoomPage /> */}
    </div>
  );
}

export default App;
