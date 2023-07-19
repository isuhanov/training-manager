import { ReactNode } from 'react';

import * as S from '../styles/components';
import { ReactComponent as Close } from '../assets/icons/close.svg';


interface IModalProps {
    title: string;
    children: ReactNode;
    onClose: () => void;
}

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