import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { ISelectField } from "../ts/interfaces/form/select-field";


function useSelectField(
    id: string,
    init:string
): ISelectField {
    const [value, setValue] = useState(init);

    useEffect(() => {
        setValue(init);
    }, [init]);

    const handleChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
    }, []);

    return {
        id,
        value,
        error: '',
        handleChange
    }
}

export default useSelectField;