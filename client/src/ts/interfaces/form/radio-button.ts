import { ChangeEvent } from "react";
import { IDefaultField } from "./default-field";

export interface IRadioField extends IDefaultField {
    value: string;
    handleChange: (
        event: ChangeEvent<HTMLInputElement>
    ) => void;
}

export interface IRadioValidators {
    isRequired?: boolean;
}