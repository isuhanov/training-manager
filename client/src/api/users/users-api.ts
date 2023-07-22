import axios, { AxiosResponse } from "axios";

import api, { API_PATH } from "..";
import { IUser } from "../../ts/interfaces/globals/user";

export const getProfile = async (): Promise<AxiosResponse<IUser>> => {
    return await api.get<IUser>('/users');
}

export const createUser = async (data: any) => {
    return await axios.post<any>(`${API_PATH}/users`, data);
}

export const updateUser = async (data: any) => {
    return await api.put('/users', data);
}