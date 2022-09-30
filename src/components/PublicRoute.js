/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoute = ({ children, ...rest }) => {
    // const auth = UseAuth();
    const auth = localStorage.getItem('token');
    
    

    return (
            <Route
                {...rest}
                render={({ location }) =>
                    !auth ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: { from: location },
                            }}
                        />
                    )
                }
            />
    );
};
