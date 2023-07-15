import * as S from '../styles/components';

import { ReactComponent as Schedule } from '../assets/icons/schedule.svg';
import { ReactComponent as Results } from '../assets/icons/results.svg';


const RecordParametr = () => {
    return (
        <S.RecordParametr>
            <S.Icon>
                <Schedule />
            </S.Icon>
            <S.RecordParametrVal>
                00:30:03
            </S.RecordParametrVal>
        </S.RecordParametr>
    );
}

export default RecordParametr;