import React, { useContext } from 'react';
import {  Navigate, useLocation, Outlet } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute = () => {
    const [user, setUser] = useContext(userContext);
    const location = useLocation();

    return (
        user.name?
            <Outlet />
            :
            <Navigate
                to="/login"
                state={{ from: location }}
                replace
            />

    );
};

export default PrivateRoute;