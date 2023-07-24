import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import * as S from '../../styles/components';
import { Justify } from '../../ts/enums/flex';
import { useAuth } from '../../hooks/contexts/useAuth';
import useForm from '../../hooks/forms/useForm';
import useTextField from '../../hooks/forms/useTextField';


/** Форма авторизации */
const LoginForm = () => {
    const navigate = useNavigate();
    const { signin } = useAuth(); 
    const [error, setError] = useState(''); // поле ошибок формы

    /** Объект поля логина */
    const login = useTextField('login', { isRequired: true });
    /** Объект поля пароля */
    const password = useTextField('password', { isRequired: true });
    
    /** Объект формы */
    const form = useForm([login, password]);
    const handleLogin = async () => {
        if (!form.isValid()) return;
        const user = {
            login: login.value, 
            password: password.value 
        }
        signin(user, () => navigate('/'), () => setError('Логин или пароль некорректны')); 
    }

    return (
        <S.Form>
            <S.Field>
                <S.Label>Логин</S.Label>
                <S.Input value={login.value} onChange={login.handleChange} />
                { login.error && <S.Error>{ login.error }</S.Error> }
            </S.Field>
            <S.Field>
                <S.Label>Пароль</S.Label>
                <S.Input value={password.value} onChange={password.handleChange} type='password' autoComplete="on" />
                { password.error && <S.Error>{ password.error }</S.Error> }
            </S.Field>
            { error && 
                <S.Error>
                    { error }
                </S.Error>
            }
            <S.FlexContainer $justify={Justify.SpaceBetween}>
                <S.StyledLink to='/registration'>Регистрация</S.StyledLink>
                <S.Button onClick={handleLogin} type='button' $padding='10px 15px'>
                    Войти
                </S.Button>
            </S.FlexContainer>
        </S.Form>
    );
}

export default LoginForm;