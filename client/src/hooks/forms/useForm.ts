import { useCallback } from "react";
import { IDefaultField } from "../../ts/interfaces/form/default-field";

/** Хук работы с формой */
function useForm(fields: IDefaultField[]): {
    /** Проверка всей полей формы на валидность */
    isValid: () => boolean;
} {
    const isValid = useCallback((): boolean => {
        const errors = fields.map(field => field.hasError && field.hasError())
        return errors.every(error => !error);        
    }, [fields]);

    return {
        isValid
    }
}

export default useForm;