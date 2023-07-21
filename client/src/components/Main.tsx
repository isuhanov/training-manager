import { Outlet, Route, Routes } from 'react-router-dom';
import * as S from '../styles/components';

import RecordsPage from '../pages/RecordsPage';
import RecordFormPage from '../pages/RecordFormPage';
import LoginFormPage from '../pages/LoginFormPage';
import RequireAuth from './router/RequireAuth';
import ProfilePage from '../pages/ProfilePage';


const Main = () => {
    return (
        <S.Main>
            <S.Container>
                <Routes>
                    <Route 
                        element={
                            <RequireAuth>
                                <Outlet />
                            </RequireAuth>
                        }
                    >
                        <Route path='/' element={ <RecordsPage /> }/>
                        <Route path='/add' element={ <RecordFormPage /> }/>
                        <Route path='/edit/:id' element={ <RecordFormPage /> }/>
                        <Route path='/profile' element={ <ProfilePage /> }/>
                    </Route>
                    <Route path='/login' element={ <LoginFormPage /> }/>
                </Routes>                
            </S.Container>
        </S.Main>
    );
};

export default Main;