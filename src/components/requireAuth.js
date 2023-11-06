import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Authenticator } from '@aws-amplify/ui-react';

const RequireLogin = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <>{children}</> : <Navigate to="/signin" />;
};

export default PrivateRoute;