import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { actGetAuthenticate } from "../actions/authenticate.action";

function PublicRoute({ children, ...rest }) {
  const dispatch = useDispatch();
  const authenticate = useSelector((state) => state.authenticate);
  useEffect(() => {
    dispatch(actGetAuthenticate());
  }, []);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticate ? (
          <Redirect to={{ pathname: "/", state: { from: location } }} />
        ) : (
          children
        )
      }
    />
  );
}

export default PublicRoute