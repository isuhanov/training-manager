import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';

import * as S from '../../styles/components';
import { Justify } from '../../ts/enums/flex';
import useTextField from '../../hooks/forms/useTextField';
import useSelectField from '../../hooks/forms/useSelectField';
import useDateTimeField from '../../hooks/forms/useTimePickerField';
import useForm from '../../hooks/forms/useForm';
import { IRecord } from '../../ts/interfaces/globals/record';
import { addRecord, getRecord, updateRecord } from '../../api/records/records-api';

const RecordForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [record, setRecord] = useState<IRecord>();

    useEffect(() => {
        // если передана id, то получить данные из записи из БД
        if (id) {
            getRecord(id).then(res => {
                if (res.data) setRecord(res.data);
            }).catch(err => console.log(err));
        }
    }, [id]);


    /** Объект поля типа тренеровки */
    const training = useSelectField(
        'training', 
        // если есть записи для изменения, то взять значения для поля из нее, иначе дать дефлтное
        useMemo(() => record?.training || 'running', [record])
    );

    /** Объект поля времени тренеровки */
    const time = useDateTimeField(
        'time', 
        { isRequired: true },
        // если есть записи для изменения, то взять значения для поля из нее, иначе дать дефлтное
        useMemo(() => record ? dayjs(`2023-07-07${record?.time}`) : null, [record])
    );

    /** Объект поля результата тренеровки */
    const result = useTextField('result', {
        minLength: 2,
        isRequired: true,
        maxLength: 50
    }, useMemo(() => record?.result || '', [record])); // если есть записи для изменения, то взять значения для поля из нее, иначе дать дефлтное

    /** Объект поля кол-ва подходов в тренеровке */
    const repeats = useTextField('repeats', {
        minLength: 1,
        isRequired: training.value === 'strength',
        isDigital: true
    }, useMemo(() => record?.repeats || '', [record])); // если есть записи для изменения, то взять значения для поля из нее, иначе дать дефлтное


    /** Объект формы */
    const form = useForm([training, time, result, repeats]);

    /** Функция-обработчки клика по кнопки "Сохранить" для сохранения данных в БД */
    const handleSave = async (): Promise<void> => {
        if (!form.isValid()) return; // если форма не валидно, то возврат из функции
        const data = { 
            id,
            training: training.value,
            time: time.value?.toDate().toLocaleString().slice(-8),
            result: result.value,
            repeats: training.value === 'strength' ? repeats.value : null
        }

        try {
            // если передано id (то есть сейчас происходит редактирование, то вызов PUT запроса, иначе POST)
            id ? await updateRecord(data) : await addRecord(data);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }
    
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
                { training.error && <S.Error>{ training.error }</S.Error> }
            </S.Field>
            <S.Field>
                <S.Label>Время тренеровки:</S.Label>
                <S.StyledTimePicker ampm={false} ampmInClock={false} views={['hours', 'minutes', 'seconds']}          
                                    value={time.value} onChange={time.handleChange}
                />
                { time.error && <S.Error>{ time.error }</S.Error> }
            </S.Field>
            <S.Field>
                <S.Label>Общий результат:</S.Label>
                <S.Input value={result.value} onChange={result.handleChange}/>
                { result.error && <S.Error>{ result.error }</S.Error> }
            </S.Field>

            { training.value === 'strength' &&
                <S.Field>
                    <S.Label>Кол-во подходов:</S.Label>
                    <S.Input type='number' value={repeats.value} onChange={repeats.handleChange}/>
                    { repeats.error && <S.Error>{ repeats.error }</S.Error> }
                </S.Field>
            }
            <S.FlexContainer $justify={Justify.FlexEnd}>
                <S.Button onClick={handleSave} type='button' $padding='10px 15px'>
                    Сохранить
                </S.Button>
            </S.FlexContainer>
        </S.Form>
    );
}

export default RecordForm;