import { useCallback } from "react";
import { IDefaultField } from "../../ts/interfaces/form/default-field";


function useForm(fields: IDefaultField[]): {
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