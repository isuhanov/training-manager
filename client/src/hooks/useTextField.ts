import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { ITextField, ITextValidators } from "../ts/interfaces/form/text-field";


function useTextField(
    id: string,
    validators: ITextValidators,
    init:string = ''
): ITextField {
    const [value, setValue] = useState(init);
    const [error, setError] = useState('');

    useEffect(() => {
        setValue(init);
    }, [init]);

    const validate = useCallback((value: string): string => {
        let err = ''
        
        if (validators.isRequired && value?.length === 0) {
            err = 'Поле обязательно';
        } else if (value?.length > 0) {
            if (validators.isDigital && !(/^[0-9]+$/.test(value))) {
                err = 'Поле должно содержать только положительные числа';
            } else if (validators.maxLength && value.length > validators.maxLength) {
                err = `Максимальная длина = ${validators.maxLength}`;
            } else if (validators.minLength && value.length < validators.minLength) {
                err = `Минимальная длина = ${validators.minLength}`;
            } 
        }

        return err;
    }, [validators]);

    const handleChange = useCallback((event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const newValue = event.target.value.trim();
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

export default useTextField;