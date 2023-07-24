import * as S from '../../styles/components';
import { Align, Direction, Justify } from '../../ts/enums/flex';
import { IRecord } from '../../ts/interfaces/globals/record';
import RecordIcon from './RecordIcon';
import RecordParametr from './RecordParametr';
import { useNavigate } from 'react-router-dom';
import { deleteRecord } from '../../api/records/records-api';
import { useModal } from '../../hooks/contexts/useModal';
import { useRecords } from '../../hooks/contexts/useRecords';

interface IRecordInfoProps extends IRecord{};

/** Информация о запсии тренировки для модального окна */
const RecordInfo = ({ id, training, time, result, repeats, date }: IRecordInfoProps) => {

    const { closeModal } = useModal();
    const { removeRecord } = useRecords();
    const navigate = useNavigate();

    /** Функция удаление записи из БД */
    const handleDelete = async (): Promise<void> => {
        try {
            await deleteRecord(id);
            removeRecord(id);
            closeModal();
        } catch (err) {
            console.log(err);
            navigate('/error');
        }
    }

    /** Функция открытия формы редактирования */
    const handleEdit = (): void => {
        navigate(`/records/edit/${id}`);
        closeModal();
    }


    return (
        <S.RecordInfo $direction={Direction.Column} $align={Align.FlexStart} $gap='10px' $padding='5px 0 0'>
            <RecordParametr type={'datetime'} value={date} />
            <S.FlexContainer $justify={Justify.SpaceBetween} $gap='20px'>
                <RecordIcon type={training} />
                <S.RecordParametrContainer>
                    <RecordParametr type={'time'} value={time}/>
                    <RecordParametr type={'result'} value={result}/>
                    { training === 'strength' &&
                        <RecordParametr type={'repeats'} value={repeats || ''} />
                    }
                </S.RecordParametrContainer>
            </S.FlexContainer>
            <S.FlexContainer $justify={Justify.SpaceBetween}>
                <S.Button onClick={handleEdit} type='button' $padding='10px 25px'>
                    Изменить
                </S.Button>
                <S.Button onClick={handleDelete} type='button' $padding='10px 25px' $issecondary={true}>
                    Удалить
                </S.Button>
            </S.FlexContainer>
        </S.RecordInfo>
    );
}

export default RecordInfo;