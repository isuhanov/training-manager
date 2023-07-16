import { Route, Routes } from 'react-router-dom';
import * as S from '../styles/components';

import RecordsPage from '../pages/RecordsPage';
import AddRecordPage from '../pages/AddRecordPage';


const Main = () => {
    return (
        <S.Main>
            <S.Container>
                <Routes>
                    <Route path='/' element={ <RecordsPage /> }/>
                    <Route path='/add' element={ <AddRecordPage /> }/>
                </Routes>                
            </S.Container>
        </S.Main>
    );
};

export default Main;