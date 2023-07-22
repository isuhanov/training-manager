import { Outlet, Route, Routes } from 'react-router-dom';
import * as S from '../styles/components';

import RecordsPage from '../pages/RecordsPage';
import RecordFormPage from '../pages/RecordFormPage';
import LoginFormPage from '../pages/LoginFormPage';
import RequireAuth from './router/RequireAuth';
import ProfilePage from '../pages/ProfilePage';
import UserFormPage from '../pages/UserFormPage';


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
                        <Route path='/records/add' element={ <RecordFormPage /> }/>
                        <Route path='/records/edit/:id' element={ <RecordFormPage /> }/>
                        <Route path='/profile' element={ <ProfilePage /> }/>
                        <Route path='/profile/edit' element={ <UserFormPage /> }/>
                    </Route>
                    <Route path='/login' element={ <LoginFormPage /> }/>
                    <Route path='/registration' element={ <UserFormPage /> }/>
                </Routes>                
            </S.Container>
        </S.Main>
    );
};

export default Main;