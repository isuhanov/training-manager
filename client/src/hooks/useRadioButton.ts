import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { IRadioField, IRadioValidators } from "../ts/interfaces/form/radio-button";


function useRadioField(
    id: string,
    validators: IRadioValidators,
    init:string = ''
): IRadioField {
    const [value, setValue] = useState(init);
    const [error, setError] = useState('');

    useEffect(() => {
        setValue(init);
    }, [init]);

    const validate = useCallback((value: string): string => {        
        let err = ''
        
        console.log(value);
        
        if (validators.isRequired && value?.length === 0) {
            err = 'Поле обязательно';
        }

        return err;
    }, [validators]);

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
        setError(validate(newValue));
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
        handleChange,
    }
}

export default useRadioField