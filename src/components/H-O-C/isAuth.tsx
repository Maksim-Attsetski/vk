import React, {FC} from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {routeNames} from "../../routes/routeNames";

interface IProps {
    children: React.ReactElement | React.ReactNode
}

const IsAuth: FC<IProps> = ({ children }) => {
    const auth: boolean = !!localStorage.getItem('auth')
    const location = useLocation()

    if (auth) {
        return <>{children}</>
    } else {
        return <Navigate to={routeNames.AUTH} state={{from: location.pathname}} />
    }
};

export default IsAuth;