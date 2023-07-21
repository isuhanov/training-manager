export interface IUser {
    id?: number;
    login: string;
    firstName: string;
    lastName: string;
    gender: 'male' | 'female';
    birthday: string;
};