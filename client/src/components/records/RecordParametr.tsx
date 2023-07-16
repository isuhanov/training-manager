import * as S from '../../styles/components';

import { ReactComponent as Calendar } from '../../assets/icons/calendar.svg';
import { ReactComponent as Schedule } from '../../assets/icons/schedule.svg';
import { ReactComponent as Results } from '../../assets/icons/results.svg';
import { ReactComponent as Repeats } from '../../assets/icons/repeats.svg';

interface IRecordParametr {
    type: 'date' | 'time' | 'result' | 'repeats';
    value: string;
}

const RecordParametr = ({ type, value }: IRecordParametr) => {

    const formatDate = (date: string): string => (new Date(date).toLocaleString().slice(0, -10));

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
                { type === 'date' ? formatDate(value) : value }
            </S.RecordParametrVal>
        </S.RecordParametr>
    );
}

export default RecordParametr;