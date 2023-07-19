import { ReactNode } from 'react';

import * as S from '../styles/components';
import { ReactComponent as Close } from '../assets/icons/close.svg';


interface IModal {
    children: ReactNode;
}

const Modal = ({ children }: IModal) => {
    return (
        <S.ModalContainer>
            <S.Modal>
                <S.ModalHeader>
                    <S.SubTitle>Название тренеровки</S.SubTitle>
                    <S.ButtonClose>
                        <S.Icon>
                            <Close />
                        </S.Icon>
                    </S.ButtonClose>
                </S.ModalHeader>

            </S.Modal>
            { children }
        </S.ModalContainer>        
    );
}

export default Modal;