import React from "react";

import { Switch, Route } from "react-router-dom";

import ClassesListPage from "./pages/ClassesListPage";
import ClassRoomPage from "./pages/ClassRoomPage";
// import ProfileStudentPage from './pages/ProfilePage';
// import CountDownPage from './pages/CountDownPage';
// import TheTestingPage from './pages/TestingPage';
import LoginPage from "./pages/LoginPage";
import ForgotPwdPage from "./pages/ForgotPwdPage";
import ResetPwdPage from "./pages/ResetPwdPage";
import TestingPage from "./pages/TestingPage";

import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const routes = [
  {
    path: "/",
    exact: true,
    authen: true,
    render: () => <ClassesListPage />,
  },
  {
    path: "/lop-hoc/:id/:alias",
    exact: true,
    authen: true,
    render: () => <ClassRoomPage />,
  },
  {
    path: "/danh-sach-lop-hoc",
    exact: true,
    authen: true,
    render: () => <ClassesListPage />,
  },
  {
    path: "/dang-nhap",
    exact: true,
    authen: false,
    render: () => <LoginPage />,
  },
  {
    path: "/quen-mat-khau",
    exact: true,
    authen: false,
    render: () => <ForgotPwdPage />,
  },
  {
    path: "/bai-thi/:id",
    exact: true,
    authen: true,
    render: () => <TestingPage />,
  },
  {
    path: "/thong-tin-ca-nhan/:id",
    exact: true,
    authen: true,
    render: () => <TestingPage />,
  },
];

const showRoutes = ({ path, exact, render, authen }, key) => {
  const RouteType = authen ? PrivateRoute : Route;
  return (
    <RouteType path={path} exact={exact} key={key}>
      {render()}
    </RouteType>
  );
};

export default () => {
  return (
    <Switch>
      {routes.map(showRoutes)}
    </Switch>
  );
};
