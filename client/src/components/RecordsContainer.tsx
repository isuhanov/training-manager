import React from 'react';

import * as S from '../styles/components';
import Record from './Record';
import { Justify, Wrap } from '../ts/enums/flex';


const RecordsContainer = () => {
    return (
        <S.FlexContainer wrap={Wrap.Wrap} justify={Justify.Center} gap='30px 100px' padding='25px 40px'>
            <Record />
            <Record />
            <Record />
            <Record />
        </S.FlexContainer>
    );
}

export default RecordsContainer;