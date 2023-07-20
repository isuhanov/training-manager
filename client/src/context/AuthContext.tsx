import { ReactNode, createContext, useState } from "react";

/**
 * Интерфейс контекста авторизации
 */
interface IAuthContext {
    /** Текущий пользователь */
    user: any,
    /** Функция авторизации */    
    signin: (user:any, callback: VoidFunction) => void,
    /** Функция выхода */    
    signout: (callback: VoidFunction) => void,
}

/**
 * Контекст авторизации
 */
export const AuthContext = createContext<IAuthContext>({
    user: null,
    signin: () => {},
    signout: () => {},
});

/**
 * Компонент для работы с контекстом авторизации
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<any>(null);

    const signin = (element: ReactNode) => {
        
    }

    const signout = () => {
        
    };
    
    return (
        <AuthContext.Provider value={{user, signin, signout}}>
            { children }
        </AuthContext.Provider>
    );
}