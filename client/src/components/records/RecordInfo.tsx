import { useContext } from 'react';
import axios from 'axios';

import * as S from '../../styles/components';
import { Align, Direction, Justify } from '../../ts/enums/flex';
import { IRecord } from '../../ts/interfaces/globals/record';
import RecordIcon from './RecordIcon';
import RecordParametr from './RecordParametr';
import { ModalContext } from '../../context/ModalContext';
import { RecordsContext } from '../../context/RecordsContext';
import { useNavigate } from 'react-router-dom';
import { API_PATH } from '../../api';
import { deleteRecord } from '../../api/records/records-api';

interface IRecordInfoProps extends IRecord{};

const RecordInfo = ({ id, training, time, result, repeats, date }: IRecordInfoProps) => {

    const { closeModal } = useContext(ModalContext);
    const { removeRecord } = useContext(RecordsContext);
    const navigate = useNavigate();

    /** Функция удаление записи из БД */
    const handleDelete = (): void => {
        deleteRecord(id).then(res => {
            removeRecord(id);
            closeModal();
        }).catch(err => console.log(err));
    }

    /** Функция открытия формы редактирования */
    const handleEdit = (): void => {
        navigate(`/edit/${id}`);
        closeModal();
    }


    return (
        <S.RecordInfo direction={Direction.Column} align={Align.FlexStart} gap='10px' padding='5px 0 0'>
            <RecordParametr type={'datetime'} value={date} />
            <S.FlexContainer justify={Justify.SpaceBetween} gap='20px'>
                <RecordIcon type={training} />
                <S.RecordParametrContainer>
                    <RecordParametr type={'time'} value={time}/>
                    <RecordParametr type={'result'} value={result}/>
                    { training === 'strength' &&
                        <RecordParametr type={'repeats'} value={repeats || ''} />
                    }
                </S.RecordParametrContainer>
            </S.FlexContainer>
            <S.FlexContainer justify={Justify.SpaceBetween}>
                <S.Button onClick={handleEdit} type='button' padding='10px 25px' isSecondary={true}>
                    Изменить
                </S.Button>
                <S.Button onClick={handleDelete} type='button' padding='10px 25px'>
                    Удалить
                </S.Button>
            </S.FlexContainer>
        </S.RecordInfo>
    );
}

export default RecordInfo;