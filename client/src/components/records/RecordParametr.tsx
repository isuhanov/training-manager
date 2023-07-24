import * as S from '../../styles/components';

import { ReactComponent as Calendar } from '../../assets/icons/calendar.svg';
import { ReactComponent as Schedule } from '../../assets/icons/schedule.svg';
import { ReactComponent as Results } from '../../assets/icons/results.svg';
import { ReactComponent as Repeats } from '../../assets/icons/repeats.svg';

interface IRecordParametrProps {
    type: 'date' | 'time' | 'datetime' | 'result' | 'repeats';
    value: string;
}

/** Параметр записи тренеровки */
const RecordParametr = ({ type, value }: IRecordParametrProps) => {
    
    /** Функция форматирования даты */
    const formatDate = (date: string): string => (new Date(date).toLocaleString().slice(0, -10));
    /** Функция форматирования даты и времени */
    const formatDatetime = (date: string): string => (new Date(date).toLocaleString());

    return (
        <S.RecordParametr>
            <S.Icon>
                { type === 'date' ? <Calendar />
                    : type === 'time' ? <Schedule /> 
                    : type === 'repeats' ? <Repeats />
                    : <Results />
                }
            </S.Icon>
            <S.RecordParametrVal>
                { type === 'date' ? formatDate(value) 
                    : type === 'datetime' ? formatDatetime(value)
                    : value  }
            </S.RecordParametrVal>
        </S.RecordParametr>
    );
}

export default RecordParametr;