import { ChangeEvent } from "react";
import { IDefaultField } from "./default-field";

export interface ISelectField extends IDefaultField {
    value: string;
    handleChange: (
        event: ChangeEvent<HTMLSelectElement>
    ) => void;
}