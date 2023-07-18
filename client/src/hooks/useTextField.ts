import { ChangeEvent, useCallback, useState } from "react";
import { ITextField, ITextValidators } from "../ts/interfaces/form/text-field";


function useTextField(
    id: string,
    validators: ITextValidators,
    init:string = ''
): ITextField {
    const [value, setValue] = useState(init);
    const [error, setError] = useState('');

    const validate = useCallback((value: string): string => {
        let err = ''
        
        if (validators.isDigital && !(/^[0-9]+$/.test(value))) {
            err = 'Поле должно содержать только положительные числа';
        } else if (validators.minLength && value.length < validators.minLength) {
            err = `Минимальная длина = ${validators.minLength}`;
        } else if (validators.maxLength && value.length > validators.maxLength) {
            err = `Максимальная длина = ${validators.maxLength}`;
        }
        console.log(value);
        console.log(err);
        return err;
    }, [validators]);

    const handleChange = useCallback((event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
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

export default useTextField;