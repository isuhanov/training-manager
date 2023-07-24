import { PickerChangeHandlerContext } from "@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types";
import { IDefaultField } from "./default-field";
import { Dayjs } from "dayjs";
import { DateValidationError, TimeValidationError } from "@mui/x-date-pickers";

/** Интерфейс поля даты и времени */
export interface IDateTimeField extends IDefaultField{
    value: Dayjs | null;
    handleChange: (value: any, context: PickerChangeHandlerContext<TimeValidationError | DateValidationError>) => void;
}

/** Интерфейс валидаторов для поля даты и времени */
export interface IDateTimeValidators {
    isRequired?: boolean;
}