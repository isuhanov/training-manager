import * as S from '../../styles/components';
import { Justify } from '../../ts/enums/flex';

const LoginForm = () => {
    return (
        <S.Form>
            <S.Field>
                <S.Label>Логин</S.Label>
                <S.Input />
            </S.Field>
            <S.Field>
                <S.Label>Пароль</S.Label>
                <S.Input type='password' />
            </S.Field>
            <S.FlexContainer justify={Justify.FlexEnd}>
                <S.Button type='button' padding='10px 15px'>
                    Войти
                </S.Button>
            </S.FlexContainer>
        </S.Form>
    );
}

export default LoginForm;