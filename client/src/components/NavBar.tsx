import * as S from '../styles/components';

import { ReactComponent as Add } from '../assets/icons/add.svg';
import { Justify } from '../ts/enums/flex';


const NavBar = () => {

    return (
        <S.Nav>
            <S.NavMenu gap='15px' justify={Justify.FlexEnd}>
                <S.NavItem>
                    <S.NavItemLink to={'/'} className={({isActive}) => isActive ? 'active' : ''} >
                        Записи
                    </S.NavItemLink>
                </S.NavItem>
                <S.NavItem>
                    <S.NavItemLink to={'/statistics'}>
                        Статистика
                    </S.NavItemLink>
                </S.NavItem>
                <S.NavItem>
                    <S.NavItemLink to={'/profile'}>
                        Профиль
                    </S.NavItemLink>
                </S.NavItem>
                <S.NavItem>
                    <S.NavItemLink to={'/add'}>
                        <S.Button>
                            <S.Icon width='20px' height='20px'>
                                <Add />
                            </S.Icon>
                        </S.Button>
                    </S.NavItemLink>
                </S.NavItem>
            </S.NavMenu>
        </S.Nav>
    );
};

export default NavBar;