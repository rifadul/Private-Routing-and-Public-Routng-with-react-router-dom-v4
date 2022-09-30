/* eslint-disable no-unused-vars */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ children, ...rest }) => {
    // const auth = UseAuth()
    const auth = localStorage.getItem('token');
    
  return (
          <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
