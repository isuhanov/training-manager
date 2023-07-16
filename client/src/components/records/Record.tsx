import * as S from '../../styles/components';

import { Justify } from '../../ts/enums/flex';
import { IRecord } from '../../ts/interfaces/globals/record';
import RecordIcon from './RecordIcon';
import RecordParametr from './RecordParametr';


interface IRecordProps extends IRecord{}

const Record = ({ id, training, time, result, repeats, date }: IRecordProps) => {    

    return (
        <S.Record justify={Justify.SpaceBetween} gap='10px'>
            <RecordIcon type={training} />
            <S.RecordParametrContainer>
                <RecordParametr type={'date'} value={date} />
                    <RecordParametr type={'time'} value={time}/>
                    <RecordParametr type={'result'} value={result}/>
                    { training === 'strength' &&
                        <RecordParametr type={'repeats'} value={repeats || ''} />
                    }
            </S.RecordParametrContainer>
        </S.Record>
    );
}

export default Record;