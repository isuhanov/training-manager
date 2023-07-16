import React, { useEffect, useState } from 'react';

import * as S from '../../styles/components';
import { IRecord } from '../../ts/interfaces/globals/record';
import { Justify, Wrap } from '../../ts/enums/flex';
import Record from './Record';
import axios from 'axios';

const RecordsContainer = () => {
    const [records, setRecords] = useState<IRecord[]>([]);

    useEffect(() => {
        axios.get('http://localhost:4200/records').then(res => {
            console.log(res.data);
            setRecords(res.data)            
        })
    }, []);

    return (
        <S.FlexContainer wrap={Wrap.Wrap} justify={Justify.Center} gap='30px 100px' padding='25px 40px'>
            { records.map((record, index) => (
                <Record  {...record} key={record.id} />
            )) }
        </S.FlexContainer>
    );
}

export default RecordsContainer;