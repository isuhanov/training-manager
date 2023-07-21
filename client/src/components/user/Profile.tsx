import * as S from '../../styles/components';

const Profile = () => {
    return (    
        <S.Profile>
            <S.ProfileLogin>
                <S.ProfileLabel>Логин:</S.ProfileLabel>
                <S.ProfileValue>ignat</S.ProfileValue>
            </S.ProfileLogin>
            <S.ProfileParametr>
                <S.ProfileLabel>Фамилия:</S.ProfileLabel>
                <S.ProfileValue>Суханов</S.ProfileValue>
            </S.ProfileParametr>
            <S.ProfileParametr>
                <S.ProfileLabel>Имя:</S.ProfileLabel>
                <S.ProfileValue>Игнат</S.ProfileValue>
            </S.ProfileParametr>

            <S.ProfileInfo>
                <S.ProfileParametr>
                    <S.ProfileLabel>Дата рождения:</S.ProfileLabel>
                    <S.ProfileValue>19.11.2002</S.ProfileValue>
                </S.ProfileParametr>  
                <S.ProfileParametr>
                    <S.ProfileLabel>Пол:</S.ProfileLabel>
                    <S.ProfileValue>Мужской</S.ProfileValue>
                </S.ProfileParametr>    
            </S.ProfileInfo>

            <S.ProfileButtonBar>
                <S.Button type='button'>
                    Выйти
                </S.Button>
                <S.Button type='button'>
                    Редактировать
                </S.Button>
            </S.ProfileButtonBar>
        </S.Profile>
    );
}

export default Profile;