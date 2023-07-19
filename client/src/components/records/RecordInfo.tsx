import { useContext } from 'react';
import axios from 'axios';

import * as S from '../../styles/components';
import { Align, Direction, Justify } from '../../ts/enums/flex';
import { IRecord } from '../../ts/interfaces/globals/record';
import RecordIcon from './RecordIcon';
import RecordParametr from './RecordParametr';
import { API_SERVER_PATH } from '../../api/api-path';
import { ModalContext } from '../../context/ModalContext';
import { RecordsContext } from '../../context/RecordsContext';

interface IRecordInfoProps extends IRecord{};

const RecordInfo = ({ id, training, time, result, repeats, date }: IRecordInfoProps) => {

    const { closeModal } = useContext(ModalContext);
    const { deleteRecord } = useContext(RecordsContext);

    const handleDelete = (): void => {
        axios.delete(`${API_SERVER_PATH}/records/${id}`).then(res => {
            deleteRecord(id);
            closeModal();
        }).catch(err => console.log(err));
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
                <S.Button type='button' padding='10px 25px'>
                    Изменить
                </S.Button>
                <S.Button onClick={handleDelete} type='button' padding='10px 25px' 
                            bgcolor={{
                                main: '#D7005A',
                                hover: '#ab0047',
                                active: '#91003c',
                            }}
                    >
                    Удалить
                </S.Button>
            </S.FlexContainer>
        </S.RecordInfo>
    );
}

export default RecordInfo;