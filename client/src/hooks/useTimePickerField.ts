import { useCallback, useEffect, useState } from "react";
import { ITimePickerField, ITimePickerValidators } from "../ts/interfaces/form/time-picker-field";
import { Dayjs } from "dayjs";
import { TimeValidationError } from "@mui/x-date-pickers";
import { FieldChangeHandlerContext } from "@mui/x-date-pickers/internals";


function useTimePickerField(
    id: string,
    validators: ITimePickerValidators,
    init: Dayjs | null = null 
): ITimePickerField {
    const [value, setValue] = useState<Dayjs | null>(init);
    const [error, setError] = useState('');

    useEffect(() => {
        setValue(init);
    }, [init]);

    const validate = useCallback((value: Dayjs | null): string => {
        let err = ''

        if (validators.isRequired && !value) { // если поле обязательно и value не заполнено
            err = 'Поле обязательно';
        }
        setError(err);
        return err; 
    }, [validators]);

    const handleChange = useCallback((value: Dayjs, context: FieldChangeHandlerContext<TimeValidationError>) => {
        setValue(value);
        setError(validate(value));
    }, [validate]);

    const hasError = useCallback((): boolean => {
        const err = validate(value);
        setError(err);
        return Boolean(err);
    }, [value, validate]);

    return {
        id,
        value,
        error,
        hasError,
        handleChange
    }
}

export default useTimePickerField;