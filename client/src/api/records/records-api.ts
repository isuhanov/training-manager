import { AxiosResponse } from "axios";
import api from "..";
import { IRecord } from "../../ts/interfaces/globals/record";

/**
 * Запрос на получение всех записей пользователя
 * @returns {Promise<AxiosResponse<IRecord[]>>}
 */
export const getRecords = async (): Promise<AxiosResponse<IRecord[]>> => {
    return await api.get<IRecord[]>(`/records`);
}

/**
 * Запрос на получение записи тренировки по ее id
 * @param {number | string} id - id записи 
 * @returns 
 */
export const getRecord = async (id: number | string): Promise<AxiosResponse<IRecord>> => {
    return await api.get<IRecord>(`/records/${id}`);
}

/**
 * Запрос на добавление тренировки
 * @param data - данные для создания записи тренировки
 * @returns {Promise<AxiosResponse<IRecord>>} 
 */
export const addRecord = async (data: any): Promise<AxiosResponse<IRecord>> => {
    return api.post<IRecord>(`/records`, data);
}

/**
 * Запрос на изменение тренировки
 * @param data - данные для изменения записи тренировки
 * @returns {Promise<AxiosResponse<void>>} 
 */
export const updateRecord = async (data: any): Promise<AxiosResponse<void>> => {
    return api.put(`/records`, data);
}

/**
 * Запрос на удаление тренировки
 * @param {number | string} id - id записи 
 * @returns {Promise<AxiosResponse<void>>} 
 */
export const deleteRecord = async (id: number | string): Promise<AxiosResponse<void>> => {
    return api.delete(`/records/${id}`);
}