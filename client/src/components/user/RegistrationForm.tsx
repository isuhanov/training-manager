import { DatePicker } from '@mui/x-date-pickers';
import * as S from '../../styles/components';

import { Justify, Wrap } from '../../ts/enums/flex';
import RadioButton from '../ui-items/RadioButton';

const RegistrationForm = () => {
    return (
        <S.Form>
            <S.Field>
                <S.Label>Фамилия</S.Label>
                <S.Input />
            </S.Field>
            <S.Field>
                <S.Label>Имя</S.Label>
                <S.Input />
            </S.Field>
            <S.Field>
                <S.Label>Логин</S.Label>
                <S.Input />
            </S.Field>
            <S.Field>
                <S.Label>Пароль</S.Label>
                <S.Input type='password' />
            </S.Field>
            <S.Field>
                <S.Label>Повторный пароль</S.Label>
                <S.Input type='password' />
            </S.Field>
            <S.Field>
                <S.Label>Пол</S.Label>
                <S.FlexContainer justify={Justify.SpaceAround} gap='10px' wrap={Wrap.Wrap}>
                    <RadioButton title='Мужской' name='gender' value='male'/>
                    <RadioButton title='Женский' name='gender' value='female'/>
                </S.FlexContainer>
            </S.Field>
            <S.Field>
                <S.Label>Дата рождения</S.Label>
                <S.StyledDataPicker /> 
            </S.Field>
            <S.FlexContainer justify={Justify.SpaceBetween}>
                <S.StyledLink to='/login'>
                    Авторизация
                </S.StyledLink>
                <S.Button type='button' $padding='10px 15px'>
                    Зарегистрироваться
                </S.Button>
            </S.FlexContainer>
        </S.Form>
    );
}

export default RegistrationForm;