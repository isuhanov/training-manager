import { useState } from 'react';
import * as S from '../styles/components';
import { Justify } from '../ts/enums/flex';
import useTextField from '../hooks/useTextField';
import useSelectField from '../hooks/useSelectField';
import dayjs, { Dayjs } from 'dayjs';
import useTimePickerField from '../hooks/useTimePickerField';

const AddRecord = () => {
    const training = useSelectField('training', 'running');
    const time = useTimePickerField('time', {});
    const result = useTextField('result', {
        minLength: 3,
        maxLength: 10
    });
    const repeats = useTextField('repeats', {
        minLength: 3,
        maxLength: 10,
        isDigital: true
    });

    

    
    return (
        <S.Form>
            <S.Field>
                <S.Label>Тип тренеровки:</S.Label>
                <S.Select value={training.value} onChange={training.handleChange}>
                    <option value='running'>Беговая</option>
                    <option value='swimming'>Плавание</option>
                    <option value='cycling'>Велотренеровка</option>
                    <option value='strength'>Силовая</option>
                </S.Select>
            </S.Field>
            <S.Field>
                <S.Label>Время тренеровки:</S.Label>
                <S.StyledTimePicker ampm={false} ampmInClock={false} views={['hours', 'minutes', 'seconds']}          
                                    value={time.value} onChange={time.handleChange}
                />
            </S.Field>
            <S.Field>
                <S.Label>Общий результат:</S.Label>
                <S.Input value={result.value} onChange={result.handleChange}/>
            </S.Field>
            <S.Field>
                <S.Label>Кол-во подходов:</S.Label>
                <S.Input type='number' value={repeats.value} onChange={repeats.handleChange}/>
            </S.Field>
            <S.FlexContainer justify={Justify.FlexEnd}>
                <S.Button type='button' padding='10px 15px'>
                    Сохранить
                </S.Button>
            </S.FlexContainer>
        </S.Form>
    );
}

export default AddRecord;