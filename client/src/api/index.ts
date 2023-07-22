import axios from "axios";
import { logout } from "./users/auth-api";

export const API_PATH = 'http://localhost:4200';

const api = axios.create({
    baseURL: API_PATH,  
});

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
    return config;
});

api.interceptors.response.use((config) => config, (error) => {
    if (error.response.status === 401) {
        logout() 
    }
})

export default api;