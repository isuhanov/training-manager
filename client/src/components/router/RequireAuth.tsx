import { Navigate } from "react-router-dom";

import { useAuth } from "../../hooks/contexts/useAuth";

interface IRequireAuthProps {
    children: JSX.Element
}

/** Компонент проверка авторизации пользователя */
const RequireAuth = ({ children }: IRequireAuthProps) => {
    const { user } = useAuth();

    // если пользователь не авторизован, то редирект на форму авторизации
    if (!user) {
        return <Navigate to='/login' replace/>
    }
    return children;
}

export default RequireAuth;