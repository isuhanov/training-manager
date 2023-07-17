import { PickerChangeHandlerContext } from "@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types";
import { IDefaultField } from "./default-field";
import { Dayjs } from "dayjs";
import { TimeValidationError } from "@mui/x-date-pickers";


export interface ITimePickerField extends Omit<IDefaultField, 'value'> {
    value: Dayjs | null;
    handleChange: (value: any, context: PickerChangeHandlerContext<TimeValidationError>) => void;
}

export interface ITimePickerValidators {
    isRequired?: boolean;
}