import { AxiosResponse } from "axios";
import api from "..";
import { IRecord } from "../../ts/interfaces/globals/record";

export const getRecords = async (): Promise<AxiosResponse<IRecord[]>> => {
    return await api.get<IRecord[]>(`/records`);
}

export const getRecord = async (id: number | string): Promise<AxiosResponse<IRecord>> => {
    return await api.get<IRecord>(`/records/${id}`);
}

export const addRecord = async (data: any): Promise<AxiosResponse<IRecord>> => {
    return api.post<IRecord>(`/records`, data);
}

export const updateRecord = async (data: any): Promise<AxiosResponse<void>> => {
    return api.put(`/records`, data);
}

export const deleteRecord = async (id: number | string): Promise<AxiosResponse<void>> => {
    return api.delete(`/records/${id}`);
}