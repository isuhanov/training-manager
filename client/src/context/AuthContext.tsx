import { ReactNode, createContext, useState } from "react";

import { login, logout } from "../api/users/users-api";

interface ILoginUser {
    login: string;
    password: string;
}

/** Интерфейс контекста авторизации */
interface IAuthContext {
    /** Текущий пользователь */
    user: any,

    /** Функция авторизации 
     * @param {ILoginUser} user - объект с полями для авторизации
     * @param {VoidFunction} onSuccess - callback, который выполниться при успехе
     * @param {VoidFunction} onError - callback, который выполниться при неудаче
    */    
   signin: (user: ILoginUser, onSuccess: VoidFunction, onError: VoidFunction) => Promise<void>,
    
    /** Функция выхода */    
    signout: () => void,
}

/**
 * Контекст авторизации
 */
export const AuthContext = createContext<IAuthContext>({
    user: null,
    signin: async () => {},
    signout: () => {},
});

/** Компонент для работы с контекстом авторизации */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState(localStorage.getItem('user'));

    const signin = async (user: ILoginUser, onSuccess: VoidFunction, onError: VoidFunction) => {
        try {
            const response = await login(user);
            setUser(response.data.user);            
            onSuccess();
        } catch (err) {
            onError();
        }
    }

    const signout = async () => {
        logout();
        setUser(null);
    };
    
    return (
        <AuthContext.Provider value={{user, signin, signout}}>
            { children }
        </AuthContext.Provider>
    );
}