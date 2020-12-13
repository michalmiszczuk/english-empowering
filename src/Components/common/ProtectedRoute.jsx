import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getCurrentUser } from '../../services/authServices';


function ProtectedRoute({ path, component: Component, render }) {
    const user = getCurrentUser()

    return (
        <Route
            path={path}
            render={props => {
                if (path === "/adminprofile" && !user.isAdmin) return <Redirect to="/main" />;
                if (!user) return <Redirect to="/login" />;
                return Component ? <Component /> : render(props);
            }}
        />
    );
}

export default ProtectedRoute;