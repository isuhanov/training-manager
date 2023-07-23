import axios from "axios";
import { API_PATH } from "..";

export const login = async (user: any) => {
    const response = await axios.post<any>(`${API_PATH}/auth/login`, user);
    localStorage.setItem('access_token', response.data.access_token);
    return response;
}

export const logout = () => {
    localStorage.removeItem('access_token');
}