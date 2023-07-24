import * as S from '../styles/components';
import { Justify } from '../ts/enums/flex';
import { useAuth } from '../hooks/contexts/useAuth';
import NavBar from './NavBar';


/** Шапка приложения */
const Header = () => {

    const { user } = useAuth();

    return (
        <S.Header>
            <S.Container>
                <S.FlexContainer>
                    <S.FlexContainer $justify={Justify.Start} $gap='10px'>
                        <S.Title>Training-manager</S.Title>
                    </S.FlexContainer>

                    { user && <NavBar /> }
                </S.FlexContainer>
            </S.Container>
        </S.Header> 
    );
};

export default Header;