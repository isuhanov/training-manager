import * as S from '../styles/components';

import { ReactComponent as Running } from '../assets/icons/running.svg';
import { Align, Direction, Justify } from '../ts/enums/flex';
import RecordParametr from './RecordParametr';


const Record = () => {
    return (
        <S.Record justify={Justify.SpaceBetween}>
            <S.Icon width='80px' height='80px'>
                <Running />
            </S.Icon>
            <S.FlexContainer gap='5px' direction={Direction.Column} align={Align.Center} justify={Justify.SpaceBetween}>
                <S.FlexContainer gap='10px' justify={Justify.Center}>
                    <RecordParametr />
                    <RecordParametr />
                </S.FlexContainer>
                <RecordParametr />
            </S.FlexContainer>  
        </S.Record>
    );
}

export default Record;