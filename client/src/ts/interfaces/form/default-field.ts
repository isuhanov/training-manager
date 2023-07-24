/** Дефолтный интерфейс поля формы */
export interface IDefaultField {
    id: string;
    error: string;
    hasError?: () => boolean;
}