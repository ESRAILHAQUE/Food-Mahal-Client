import {useContext } from "react"
import { AuthContext } from "../../Providers/AuthProviders"
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
    const { users, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
          <div className=" text-center mb-96 mt-28">
            <progress className="progress w-56"></progress>
          </div>
        );

    }
    if (users) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'} replace></Navigate>
};
export default PrivateRoute