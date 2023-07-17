import { ChangeEvent } from "react";
import { IDefaultField } from "./default-field";

export interface ISelectField extends IDefaultField {
    handleChange: (
        event: ChangeEvent<HTMLSelectElement>
    ) => void;
}