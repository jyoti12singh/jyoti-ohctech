import { Navigate, Outlet } from "react-router";
// import { useAuth } from "../components/security/AuthContext";
import { useSessionStorage } from "./useSessionStorage";

const ProtectedRoute = () => {

    const { sessionData } = useSessionStorage('sessionData');

    console.log(sessionData);
    if (!sessionData || !sessionData.userId) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute;