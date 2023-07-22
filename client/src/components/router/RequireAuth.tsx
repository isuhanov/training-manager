import { useAuth } from "../../hooks/auth/useAuth";
import { Navigate } from "react-router-dom";

interface IRequireAuth {
    children: JSX.Element
}

const RequireAuth = ({ children }: IRequireAuth) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to='/login' replace/>
    }
    return children;
}

export default RequireAuth;