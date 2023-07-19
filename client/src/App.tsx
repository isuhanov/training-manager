import { useContext } from 'react';

import * as S from './styles/components';
import Header from './components/Header';
import Main from './components/Main';
import { Direction, Justify } from './ts/enums/flex';
import Modal from './components/Modal';
import { ModalContext } from './context/ModalContext';


function App() {

    const { modal, element, closeModal } = useContext(ModalContext);

    return (
        <S.Body direction={Direction.Column} justify={Justify.FlexStart}>
            <Header />
            <Main />
            { modal && 
                <Modal title={'Беговая тренеровка'} onClose={() => closeModal()}>
                    { element }
                </Modal>
            }
        </S.Body>
    );
}

export default App;
