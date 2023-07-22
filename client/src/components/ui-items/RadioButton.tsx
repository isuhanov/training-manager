import { ChangeEvent } from 'react';
import * as S from '../../styles/components';


interface IRadioButtonProprs {
    title: string;
    value: string;
    name: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} 

const RadioButton = ({ title, value, name, onChange } : IRadioButtonProprs) => {
    return (
        <S.Radio>
            <S.Input type='radio' name={name} value={value} onChange={onChange}/>
            <S.RadioButton />
            <S.RadioLabel>{ title }</S.RadioLabel>
        </S.Radio>
    );
}

export default RadioButton;