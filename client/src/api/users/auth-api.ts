import axios, { AxiosResponse } from "axios";
import { API_PATH } from "..";


/**
 * Запроса на выполнение авторизации
 * @param user - объект с полями login и password
 * @returns {Promise<AxiosResponse<any>> }
 */
export const login = async (user: any): Promise<AxiosResponse<any>> => {
    const response = await axios.post<any>(`${API_PATH}/auth/login`, user);
    localStorage.setItem('access_token', response.data.access_token);
    return response;
}

/** Выполнение логаута */
export const logout = () => {
    localStorage.removeItem('access_token');
}