import { useEffect, useState } from 'react';

import * as S from '../../styles/components';
import { useAuth } from '../../hooks/auth/useAuth';
import { getProfile } from '../../api/users/users-api';
import { IUser } from '../../ts/interfaces/globals/user';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    const { signout } = useAuth();
    const [user, setUser] = useState<IUser>();
    const formatDate = (date: string): string => (new Date(date).toLocaleString().slice(0, -10));

    useEffect(() => {
        getProfile().then(res => {
            setUser(res.data);
        }).catch(err => console.log(err));
    }, []);

    return (    
        <S.Profile>
            <S.ProfileLogin>
                <S.ProfileLabel>Логин:</S.ProfileLabel>
                <S.ProfileValue>{ user?.login }</S.ProfileValue>
            </S.ProfileLogin>
            <S.ProfileParametr>
                <S.ProfileLabel>Фамилия:</S.ProfileLabel>
                <S.ProfileValue>{ user?.lastName }</S.ProfileValue>
            </S.ProfileParametr>
            <S.ProfileParametr>
                <S.ProfileLabel>Имя:</S.ProfileLabel>
                <S.ProfileValue>{ user?.firstName }</S.ProfileValue>
            </S.ProfileParametr>

            <S.ProfileInfo>
                <S.ProfileParametr>
                    <S.ProfileLabel>Дата рождения:</S.ProfileLabel>
                    <S.ProfileValue>{ formatDate(user?.birthday || '') }</S.ProfileValue>
                </S.ProfileParametr>  
                <S.ProfileParametr>
                    <S.ProfileLabel>Пол:</S.ProfileLabel>
                    <S.ProfileValue>{ user?.gender === 'male' ? 'Мужской' : 'Женский' }</S.ProfileValue>
                </S.ProfileParametr>    
            </S.ProfileInfo>

            <S.ProfileButtonBar>
                <S.Button onClick={signout} type='button' $issecondary >
                    Выйти
                </S.Button>
                <S.Button onClick={() => navigate('/profile/edit')} type='button'>
                    Редактировать
                </S.Button>
            </S.ProfileButtonBar>
        </S.Profile>
    );
}

export default Profile;