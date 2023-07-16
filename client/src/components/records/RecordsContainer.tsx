import React from 'react';

import * as S from '../../styles/components';
import Record from './Record';
import { Justify, Wrap } from '../../ts/enums/flex';
import { IRecord } from '../../ts/interfaces/globals/record';

const records: IRecord[] = [
    {
        training: 'running',
        time: '00:30:03',
        results: '0',
    },
    {
        training: 'cycling',
        time: '00:30:03',
        results: '10',
    },
    {
        training: 'cycling',
        time: '00:30:03',
        results: '10',
    },
    {
        training: 'swimming',
        time: '00:30:03',
        results: '10',
    },
    {
        training: 'strength',
        time: '00:30:03',
        results: '10',
        repeats: '3'
    }
]


const RecordsContainer = () => {
    return (
        <S.FlexContainer wrap={Wrap.Wrap} justify={Justify.Center} gap='30px 100px' padding='25px 40px'>
            { records.map((record, index) => (
                <Record  {...record} key={index} />
            )) }
        </S.FlexContainer>
    );
}

export default RecordsContainer;