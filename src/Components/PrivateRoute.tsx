import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { user } = useAuth()

    return user ? children : <Navigate to="/" />
};

export default PrivateRoute;
