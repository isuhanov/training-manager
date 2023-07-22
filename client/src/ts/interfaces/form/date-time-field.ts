import { PickerChangeHandlerContext } from "@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types";
import { IDefaultField } from "./default-field";
import { Dayjs } from "dayjs";
import { DateValidationError, TimeValidationError } from "@mui/x-date-pickers";


export interface IDateTimeField extends IDefaultField{
    value: Dayjs | null;
    handleChange: (value: any, context: PickerChangeHandlerContext<TimeValidationError | DateValidationError>) => void;
}

export interface IDateTimeValidators {
    isRequired?: boolean;
}