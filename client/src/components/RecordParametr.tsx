import * as S from '../styles/components';

import { ReactComponent as Schedule } from '../assets/icons/schedule.svg';
import { ReactComponent as Results } from '../assets/icons/results.svg';
import { ReactComponent as Repeats } from '../assets/icons/repeats.svg';

interface IRecordParametr {
    type: 'time' | 'results' | 'repeats';
    value: string | undefined;
}

const RecordParametr = ({ type, value }: IRecordParametr) => {
    return (
        <S.RecordParametr>
            <S.Icon>
                { type === 'time' ? <Schedule /> 
                    : type === 'repeats' ? <Repeats />
                    : <Results />
                }
            </S.Icon>
            <S.RecordParametrVal>
                { value }
            </S.RecordParametrVal>
        </S.RecordParametr>
    );
}

export default RecordParametr;