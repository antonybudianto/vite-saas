import React from 'react';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({ isAuth, component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuth ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

export default PrivateRoute;
