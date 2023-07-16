import { useEffect } from 'react';
import * as S from '../../styles/components';

import { Align, Direction, Justify } from '../../ts/enums/flex';
import { IRecord } from '../../ts/interfaces/globals/record';
import RecordIcon from './RecordIcon';
import RecordParametr from './RecordParametr';


interface IRecordProps extends IRecord{}

const Record = ({ id, training, time, result, repeats, date }: IRecordProps) => {    

    return (
        <S.Record justify={Justify.SpaceBetween}>
            <RecordIcon type={training} />
            <S.FlexContainer gap='5px' direction={Direction.Column} align={Align.Center} justify={Justify.SpaceBetween}>
                <S.FlexContainer gap='10px' justify={Justify.Center}>
                    <RecordParametr type={'date'} value={date} />
                    <RecordParametr type={'time'} value={time}/>
                </S.FlexContainer>
                <S.FlexContainer gap='10px' justify={Justify.Center}>
                    <RecordParametr type={'result'} value={result}/>
                    { training === 'strength' &&
                        <RecordParametr type={'repeats'} value={repeats || ''} />
                    }
                </S.FlexContainer>
            </S.FlexContainer>  
        </S.Record>
    );
}

export default Record;