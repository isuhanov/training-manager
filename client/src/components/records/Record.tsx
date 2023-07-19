import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';

import * as S from '../../styles/components';
import { Justify } from '../../ts/enums/flex';
import { IRecord } from '../../ts/interfaces/globals/record';
import RecordIcon from './RecordIcon';
import RecordParametr from './RecordParametr';
import RecordInfo from './RecordInfo';


interface IRecordProps extends IRecord{}

const Record = (props: IRecordProps) => { 
    
    const { training, time, result, repeats, date } = props;

    const { openModal } = useContext(ModalContext);

    return (
        <S.Record justify={Justify.SpaceBetween} gap='10px' onClick={() => openModal(<RecordInfo {...props} />)}>
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