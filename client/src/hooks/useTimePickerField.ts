import { useCallback, useState } from "react";
import { ITimePickerField, ITimePickerValidators } from "../ts/interfaces/form/time-picker-field";
import dayjs, { Dayjs } from "dayjs";
import { PickerChangeHandlerContext } from "@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types";
import { TimeValidationError } from "@mui/x-date-pickers";
import { FieldChangeHandlerContext } from "@mui/x-date-pickers/internals";


function useTimePickerField(
    id: string,
    validators: ITimePickerValidators,
    init: Dayjs | null = null 
): ITimePickerField {
    const [value, setValue] = useState<Dayjs | null>(init);
    const [error, setError] = useState('');

    const handleChange = useCallback((value: Dayjs, context: FieldChangeHandlerContext<TimeValidationError>) => {
        setValue(value);
 
    }, [validators]);

    return {
        id,
        value,
        error,
        handleChange
    }
}

export default useTimePickerField;