/** Интерфейс валидаторов для поля пароля */
export interface IPasswordValidators {
    minLength?: number;
    maxLength?: number;
    isRequired?: boolean;
    /** параметр для повторного пароля - значение первого пароля */
    firstPassword?: string;
}