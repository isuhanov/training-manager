import { ChangeEvent } from "react";
import { IDefaultField } from "./default-field";

export interface ITextField extends IDefaultField {
    handleChange: (
        event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => void;
}

export interface ITextValidators {
    minLength?: number;
    maxLength?: number;
    isDigital?: boolean;
}