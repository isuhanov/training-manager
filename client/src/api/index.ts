import axios from "axios";
import { logout } from "./users/auth-api";

export const API_PATH = 'http://localhost:4200';

const api = axios.create({
    baseURL: API_PATH,  
});

// интерцептор запроса на добавление токена в хэдер
api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
    return config;
});

// интерцептор ответа на отлов ошибки неавторизации
api.interceptors.response.use((config) => config, (error) => {
    if (error.response.status === 401) {
        logout() 
    }
    throw error;
})

export default api;