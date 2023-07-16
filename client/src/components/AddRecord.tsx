import * as S from '../styles/components';
import { Justify } from '../ts/enums/flex';

const AddRecord = () => {
    return (
        <S.Form>
            <S.Field>
                <S.Label>Тип тренеровки:</S.Label>
                {/* <S.Input /> */}
                <S.Select>
                    <option>ertyu</option>
                    <option>as</option>
                    <option>dc</option>
                </S.Select>
            </S.Field>
            <S.Field>
                <S.Label>Время тренеровки:</S.Label>
                <S.StyledTimePicker ampm={false} ampmInClock={false} views={['hours', 'minutes', 'seconds']} />
            </S.Field>
            <S.Field>
                <S.Label>Общий результат:</S.Label>
                <S.Input />
            </S.Field>
            <S.Field>
                <S.Label>Кол-во подходов:</S.Label>
                <S.Input type='number'/>
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