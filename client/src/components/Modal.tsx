import { ReactNode } from 'react';

import * as S from '../styles/components';
import { ReactComponent as Close } from '../assets/icons/close.svg';


interface IModalProps {
    title: string;
    /** Компонент, который будет отображаться в модальном окне */
    children: ReactNode;
    onClose: () => void;
}

/** Модальное окно */
const Modal = ({ title, children, onClose }: IModalProps) => {
    return (
        <S.ModalContainer>
            <S.Modal>
                <S.ModalHeader>
                    <S.ModalTitle>{ title }</S.ModalTitle>
                    <S.ButtonClose onClick={onClose}>
                        <S.Icon>
                            <Close />
                        </S.Icon>
                    </S.ButtonClose>
                </S.ModalHeader>
                { children }
            </S.Modal>
        </S.ModalContainer>        
    );
}

export default Modal;