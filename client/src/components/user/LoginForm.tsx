import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import * as S from '../../styles/components';
import { Justify } from '../../ts/enums/flex';
import useTextField from '../../hooks/useTextField';
import { useAuth } from '../../hooks/useAuth';

const LoginForm = () => {
    const navigate = useNavigate();
    const { signin } = useAuth();
    const [error, setError] = useState('');

    const login = useTextField('login', {});
    const password = useTextField('password', {});
    
    const handleLogin = async () => {    
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
                <S.Input
                    value={login.value} onChange={login.handleChange} 
                />
            </S.Field>
            <S.Field>
                <S.Label>Пароль</S.Label>
                <S.Input
                    value={password.value} onChange={password.handleChange} 
                    type='password' autoComplete="on"
                />
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