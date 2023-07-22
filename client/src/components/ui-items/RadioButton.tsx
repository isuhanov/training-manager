import * as S from '../../styles/components';


interface IRadioButton {
    title: string;
    value: string;
    name: string;
} 

const RadioButton = ({ title, value, name } : IRadioButton) => {
    return (
        <S.Radio>
            <S.Input type='radio' name={name} value={value}/>
            <S.RadioButton />
            <S.RadioLabel>{ title }</S.RadioLabel>
        </S.Radio>
    );
}

export default RadioButton;