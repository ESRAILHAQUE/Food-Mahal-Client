import {useContext } from "react"
import { AuthContext } from "../../Providers/AuthProviders"
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const { users } = useContext(AuthContext);
    if (users) {
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
};
export default PrivateRoute