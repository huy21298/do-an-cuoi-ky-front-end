import React from 'react';

import LoginPage from './pages/LoginPage';
import ClassesListPage from './pages/ClassesListPage';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
     <ClassesListPage />
    </div>
  );
}

export default App;
