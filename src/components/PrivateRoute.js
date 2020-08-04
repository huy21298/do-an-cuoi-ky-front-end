import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { actGetAuthenticate } from "../actions/authenticate.action";

function PrivateRoute({ children, ...rest }) {
  const dispatch = useDispatch();
  const authen = useSelector((state) => state.authenticate);
  useEffect(() => {
    dispatch(actGetAuthenticate());
  }, []);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        console.log('children', children);
        console.log('location', location);
        console.log('authen', authen)
          return authen ? (
            children
          ) : (
            <Redirect to={{ pathname: "/dang-nhap", state: { from: location } }} />
          )
      }
      }
    />
  );
}

export default PrivateRoute;
