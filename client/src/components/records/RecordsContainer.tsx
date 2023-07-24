import { useEffect } from 'react';

import * as S from '../../styles/components';
import { Justify, Wrap } from '../../ts/enums/flex';
import Record from './Record';
import { getRecords } from '../../api/records/records-api';
import { useRecords } from '../../hooks/contexts/useRecords';


/** Контейнер для карточек записей тренировок */
const RecordsContainer = () => {
    
    const { records, setRecords } = useRecords()

    useEffect(() => {        
        getRecords().then(res => {
            setRecords(res.data);
        }).catch(err => console.log(err));
    }, [setRecords]);

    return (
        <>
            { records.length > 0 ?  
                    <S.FlexContainer $wrap={Wrap.Wrap} $justify={Justify.Center} $gap='30px 100px' $padding='25px 40px'>
                        { records.map((record) => (
                            <Record  {...record} key={record.id} />
                            )) }
                    </S.FlexContainer>
                :
                    <S.Message>К сожалению, у вас пока что нет записей :(</S.Message>
            }
        </>
    );
}

export default RecordsContainer;