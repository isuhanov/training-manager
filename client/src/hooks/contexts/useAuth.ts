import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

/** Хук для работы с контекстом авторизации */
export const useAuth = () => useContext(AuthContext);