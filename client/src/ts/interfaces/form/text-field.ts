import { ChangeEvent } from "react";
import { IDefaultField } from "./default-field";

/** Интерфейс текстового поля */
export interface ITextField extends IDefaultField {
    value: string;
    handleChange: (
        event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => void;
}

/** Интерфейс валидаторов для текстового поля */
export interface ITextValidators {
    minLength?: number;
    maxLength?: number;
    isRequired?: boolean;
    isDigital?: boolean;
}