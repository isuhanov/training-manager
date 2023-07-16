import * as S from '../../styles/components';

import { Align, Direction, Justify } from '../../ts/enums/flex';
import { IRecord } from '../../ts/interfaces/globals/record';
import RecordIcon from './RecordIcon';
import RecordParametr from './RecordParametr';


interface IRecordProps extends IRecord{}

const Record = ({ training, time, results, repeats }: IRecordProps) => {    
    return (
        <S.Record justify={Justify.SpaceBetween}>
            <RecordIcon type={training} />
            <S.FlexContainer gap='5px' direction={Direction.Column} align={Align.Center} justify={Justify.SpaceBetween}>
                <S.FlexContainer gap='10px' justify={Justify.Center}>
                    <RecordParametr type={'time'} value={time}/>
                    { training === 'strength' &&
                        <RecordParametr type={'repeats'} value={repeats} />
                    }
                </S.FlexContainer>
                <RecordParametr type={'results'} value={results}/>
            </S.FlexContainer>  
        </S.Record>
    );
}

export default Record;