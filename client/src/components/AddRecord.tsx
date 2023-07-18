import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import * as S from '../styles/components';
import { Justify } from '../ts/enums/flex';
import useTextField from '../hooks/useTextField';
import useSelectField from '../hooks/useSelectField';
import useTimePickerField from '../hooks/useTimePickerField';
import useForm from '../hooks/useForm';
import { API_SERVER_PATH } from '../api/api-path';

const AddRecord = () => {
    const navigate = useNavigate();

    const training = useSelectField('training', 'running');
    const time = useTimePickerField('time', { isRequired: true });
    const result = useTextField('result', {
        minLength: 2,
        isRequired: true,
        maxLength: 50
    });
    const repeats = useTextField('repeats', {
        minLength: 1,
        isRequired: training.value === 'strength',
        isDigital: true
    });

    const form = useForm([training, time, result, repeats]);
    
    const handleSave = () => {
        if (!form.isValid()) return; 
        axios.post(`${API_SERVER_PATH}/records`, { 
            training: training.value,
            time: time.value?.toDate().toLocaleString().slice(-8),
            result: result.value,
            repeats: training.value === 'strength' ? repeats.value : undefined
         }).then(res => {
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err));
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
                { training.error &&
                    <S.Error>
                        { training.error }
                    </S.Error>
                }
            </S.Field>
            <S.Field>
                <S.Label>Время тренеровки:</S.Label>
                <S.StyledTimePicker ampm={false} ampmInClock={false} views={['hours', 'minutes', 'seconds']}          
                                    value={time.value} onChange={time.handleChange}
                />
                { time.error &&
                    <S.Error>
                        { time.error }
                    </S.Error>
                }
            </S.Field>
            <S.Field>
                <S.Label>Общий результат:</S.Label>
                <S.Input value={result.value} onChange={result.handleChange}/>
                { result.error &&
                    <S.Error>
                        { result.error }
                    </S.Error>
                }
            </S.Field>

            { training.value === 'strength' &&
                <S.Field>
                    <S.Label>Кол-во подходов:</S.Label>
                    <S.Input type='number' value={repeats.value} onChange={repeats.handleChange}/>
                    { repeats.error &&
                        <S.Error>
                            { repeats.error }
                        </S.Error>
                    }
                </S.Field>
            }
            <S.FlexContainer justify={Justify.FlexEnd}>
                <S.Button onClick={handleSave} type='button' padding='10px 15px'>
                    Сохранить
                </S.Button>
            </S.FlexContainer>
        </S.Form>
    );
}

export default AddRecord;