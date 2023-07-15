import React from 'react';

import * as S from '../styles/components';
import Record from './Record';


const RecordsContainer = () => {
    return (
        <S.FlexContainer wrap='wrap' justify='space-between' gap='30px' padding='25px 40px'>
            <Record />
        </S.FlexContainer>
    );
}

export default RecordsContainer;