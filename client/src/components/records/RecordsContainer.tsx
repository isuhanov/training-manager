import React, { useContext, useEffect } from 'react';

import * as S from '../../styles/components';
import { IRecord } from '../../ts/interfaces/globals/record';
import { Justify, Wrap } from '../../ts/enums/flex';
import Record from './Record';
import axios from 'axios';
import { API_SERVER_PATH } from '../../api/api-path';
import { RecordsContext } from '../../context/RecordsContext';

const RecordsContainer = () => {
    
    const { records, setRecords } = useContext(RecordsContext);

    useEffect(() => {
        axios.get<IRecord[]>(`${API_SERVER_PATH}/records`).then(res => {
            setRecords(res.data);
        }).catch(err => console.log(err));
    }, [setRecords]);

    return (
        <S.FlexContainer wrap={Wrap.Wrap} justify={Justify.Center} gap='30px 100px' padding='25px 40px'>
            { records.map((record, index) => (
                <Record  {...record} key={record.id} />
            )) }
        </S.FlexContainer>
    );
}

export default RecordsContainer;