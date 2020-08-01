import React from 'react';

import Header from './components/Header/Header';
import LoginPage from './pages/LoginPage';
import ClassesListPage from './pages/ClassesListPage';
import ClassRoomPage from './pages/ClassRoomPage';

function App() {
  return (
    <div className="App">
      <Header />
     <LoginPage />
     {/* <ClassesListPage /> */}
     {/* <ClassRoomPage /> */}
    </div>
  );
}

export default App;
