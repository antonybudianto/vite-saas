import React from 'react';
import { Route, Redirect } from 'react-router';

const AuthRedirectRoute = ({ isAuth, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (!isAuth ? <Component {...props} /> : <Redirect to="/" />)}
  />
);

export default AuthRedirectRoute;
