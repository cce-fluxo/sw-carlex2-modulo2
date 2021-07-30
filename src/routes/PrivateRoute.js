import React from "react";
import { Route, Redirect } from "react-router-dom";

//import { isAuthenticated } from "../services/storage";

export default function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        /*isAuthenticated()*/true ? (children)  : <Redirect to="/" />
      }
    />
  );
}