import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const { users, loading } = useAuth();
    let location = useLocation();
    if (loading) {
        return <Spinner style={{ margin: "300px" }} animation="border" variant="success" />
    }
    if (users.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />

};

export default PrivateRoute;