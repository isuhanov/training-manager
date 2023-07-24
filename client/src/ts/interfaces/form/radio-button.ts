import { ChangeEvent } from "react";
import { IDefaultField } from "./default-field";

/** Интерфейс поля радио-кнопок */
export interface IRadioField extends IDefaultField {
    value: string;
    handleChange: (
        event: ChangeEvent<HTMLInputElement>
    ) => void;
}

/** Интерфейс валидаторов для радио-кнопок*/
export interface IRadioValidators {
    isRequired?: boolean;
}