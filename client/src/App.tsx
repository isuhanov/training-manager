import { useState } from 'react';

import * as S from './styles/components';
import Header from './components/Header';
import Main from './components/Main';
import { Direction, Justify } from './ts/enums/flex';
import Modal from './components/Modal';
import RecordInfo from './components/records/RecordInfo';


function App() {

    const [modal, setModal] = useState(true);

    return (
        <S.Body direction={Direction.Column} justify={Justify.FlexStart}>
            <Header />
            <Main />
            { modal && 
                <Modal title={'Беговая тренеровка'} onClose={() => setModal(false)}>
                    <RecordInfo id={1} training={'running'} time={'00:10:10'} result={'30'} repeats={'2'} date={new Date().toString()} />
                </Modal>
            }
        </S.Body>
    );
}

export default App;
