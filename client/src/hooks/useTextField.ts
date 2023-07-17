import { ChangeEvent, useCallback, useState } from "react";
import { ITextField, ITextValidators } from "../ts/interfaces/form/text-field";


function useTextField(
    id: string,
    validators: ITextValidators,
    init:string = ''
): ITextField {
    const [value, setValue] = useState(init);
    const [error, setError] = useState('');

    const handleChange = useCallback((event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);

        if (validators.isDigital && !(/^[0-9]+$/.test(newValue))) {
            setError('Поле должно содержать только положительные числа');
            console.log('Поле должно содержать только положительные числа');
        } else if (validators.maxLength && newValue.length > validators.maxLength) {
            setError(`Минимальная длина = ${validators.minLength}`);
        } else if (validators.maxLength && newValue.length > validators.maxLength) {
            setError(`Максимальная длина = ${validators.maxLength}`);
        }
    }, [validators]);

    return {
        id,
        value,
        error,
        handleChange
    }
}

export default useTextField;