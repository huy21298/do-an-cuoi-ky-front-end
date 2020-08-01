import React from 'react'

import { Switch, Route } from "react-router-dom";

import ClassesListPage from './pages/ClassesListPage';
import ClassRoomPage from './pages/ClassRoomPage';
// import ProfileStudentPage from './pages/ProfilePage';
// import CountDownPage from './pages/CountDownPage';
// import TheTestingPage from './pages/TestingPage';
import LoginPage from './pages/LoginPage';


const routes = [
  {
    path: "/",
    exact: true,
    render: () => <ClassesListPage />
  },
  {
    path: "/lop-hoc/:id/:alias",
    exact: true,
    render: () => <ClassRoomPage />
  },
  {
    path: "/danh-sach-lop-hoc",
    exact: true,
    render: () => <ClassesListPage />
  },
  {
    path: "/dang-nhap",
    exact: true,
    render: () => <LoginPage />
  }
];

const showRoutes = ({ path, exact, render }, key) => (
  <Route 
    key={key} 
    path={path} 
    exact={exact} 
    component={render} />
);

export default () => {
  return <Switch>{routes.map(showRoutes)}</Switch>;
};