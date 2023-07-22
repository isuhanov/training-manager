import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from '../../styles/components';
import { Justify, Wrap } from '../../ts/enums/flex';
import RadioButton from '../ui-items/RadioButton';
import useTextField from '../../hooks/forms/useTextField';
import useDateTimeField from '../../hooks/forms/useTimePickerField';
import useLoginField from '../../hooks/forms/useLoginField';
import usePasswordField from '../../hooks/forms/usePasswordField';
import useRadioField from '../../hooks/forms/useRadioButton';
import useForm from '../../hooks/forms/useForm';
import { createUser } from '../../api/users/users-api';

const RegistrationForm = () => {
    const navigate = useNavigate();
    
    const [errorForm, setErrorForm] = useState('');

    /** Объект поля логина */
    const login = useLoginField('login', {
        isRequired: true,
    });

    /** Объект поля пароля */
    const password = usePasswordField('password', {
        minLength: 8,
        isRequired: true,
    });

    /** Объект поля повторного пароля */
    const secondPassword = usePasswordField('password', {
        isRequired: true,
        firstPassword: useMemo(() => password.value, [password.value])
    });

    /** Объект поля фамилии */
    const firstName = useTextField('first-name', {
        isRequired: true,
    });
    
    /** Объект поля имени */
    const lastName = useTextField('last-name', {
        isRequired: true,
    });

    const gender = useRadioField('gender', {
        isRequired: true
    });
    
    /** Объект поля даты рождения */
    const birthday = useDateTimeField('birthday', {
        isRequired: true
    });

    /** Объект формы */
    const form = useForm([login, password, secondPassword, firstName, lastName, gender, birthday]);

    /** Функция-обработчки клика по кнопки "Зарегистрироваться" для сохранения данных в БД */
    const handleSave = () => {
        if (!form.isValid()) return;
        const data = {
            login: login.value,
            password: password.value,
            firstName: firstName.value,
            lastName: lastName.value,
            gender: gender.value,
            birthday: birthday.value?.format().slice(0, 10),
        }

        createUser(data).then(res => {
            navigate('/login');
        }).catch(err => {
            if (err.response.status === 409) {
                setErrorForm('Данный логин уже занят, попробуйте другой');
            } else {
                setErrorForm('Что-то пошло не так, попробуйте позже');
            }
        });
    }


    return (
        <S.Form>
            <S.Field>
                <S.Label>Фамилия</S.Label>
                <S.Input name={lastName.id} value={lastName.value} onChange={lastName.handleChange}/>
                { lastName.error && <S.Error>{ lastName.error }</S.Error> }
            </S.Field>

            <S.Field>
                <S.Label>Имя</S.Label>
                <S.Input name={firstName.id} value={firstName.value} onChange={firstName.handleChange}/>
                { firstName.error && <S.Error>{ firstName.error }</S.Error> }
            </S.Field>

            <S.Field>
                <S.Label>Логин</S.Label>
                <S.Input name={login.id} value={login.value} onChange={login.handleChange}/>
                { login.error && <S.Error>{ login.error }</S.Error> }
            </S.Field>

            <S.Field>
                <S.Label>Пароль</S.Label>
                <S.Input name={password.id} value={password.value} onChange={password.handleChange} type='password' autoComplete="on" />
                { password.error && <S.Error>{ password.error }</S.Error> }
            </S.Field>

            <S.Field>
                <S.Label>Повторный пароль</S.Label>
                <S.Input name={secondPassword.id} value={secondPassword.value} onChange={secondPassword.handleChange} type='password' autoComplete="on" />
                { secondPassword.error && <S.Error>{ secondPassword.error }</S.Error> }
            </S.Field>

            <S.Field>
                <S.Label>Пол</S.Label>
                <S.FlexContainer $justify={Justify.SpaceAround} $gap='10px' $wrap={Wrap.Wrap}>
                    <RadioButton name={gender.id} onChange={gender.handleChange} title='Мужской' value='male'/>
                    <RadioButton name={gender.id} onChange={gender.handleChange} title='Женский' value='female'/>
                </S.FlexContainer>
                { gender.error && <S.Error>{ gender.error }</S.Error> }
            </S.Field>

            <S.Field>
                <S.Label>Дата рождения</S.Label>
                <S.StyledDataPicker format='DD/MM/YYYY' value={birthday.value} onChange={birthday.handleChange} disableFuture/> 
                { birthday.error && <S.Error>{ birthday.error }</S.Error> }
            </S.Field>

            { errorForm && <S.Error>{ errorForm }</S.Error> }
            <S.FlexContainer $justify={Justify.SpaceBetween}>
                <S.StyledLink to='/login'>
                    Авторизация
                </S.StyledLink>
                <S.Button onClick={handleSave} type='button' $padding='10px 15px'>
                    Зарегистрироваться
                </S.Button>
            </S.FlexContainer>
        </S.Form>
    );
}

export default RegistrationForm;