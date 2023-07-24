import { ChangeEvent } from "react";
import { IDefaultField } from "./default-field";

/** Хук работы с полем выпадающего списка */
/** Интерфейс поля выпадающего списка */
export interface ISelectField extends IDefaultField {
    value: string;
    handleChange: (
        event: ChangeEvent<HTMLSelectElement>
    ) => void;
}