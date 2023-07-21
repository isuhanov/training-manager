import axios, { AxiosResponse } from "axios";
import api, { API_PATH } from "..";
import { IUser } from "../../ts/interfaces/globals/user";

export const login = async (user: any) => {
    const response = await axios.post<any>(`${API_PATH}/auth/login`, user);
    localStorage.setItem('access_token', response.data.access_token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    return response;
}

export const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
}

export const getProfile = async (): Promise<AxiosResponse<IUser>> => {
    return await api.get<IUser>('/users');
}