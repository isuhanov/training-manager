import * as S from '../styles/components';
import { Justify } from '../ts/enums/flex';
import NavBar from './NavBar';


const Header = () => {

    return (
        <S.Header>
            <S.Container>
                <S.FlexContainer>
                    <S.FlexContainer justify={Justify.Start} gap='10px'>
                        <S.Title>Training-manager</S.Title>
                    </S.FlexContainer>

                    <NavBar />
                </S.FlexContainer>
            </S.Container>
        </S.Header> 
    );
};

export default Header;