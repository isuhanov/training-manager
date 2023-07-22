import { ChangeEvent, memo } from 'react';
import * as S from '../../styles/components';


interface IRadioButtonProprs {
    title: string;
    value: string;
    name: string;
    isChecked?: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} 

const RadioButton = memo(({ title, value, name, isChecked, onChange } : IRadioButtonProprs) => {
    return (
        <S.Radio>
            <S.Input type='radio' name={name} checked={isChecked} value={value} onChange={onChange}/>
            <S.RadioButton />
            <S.RadioLabel>{ title }</S.RadioLabel>
        </S.Radio>
    );
});

export default RadioButton;