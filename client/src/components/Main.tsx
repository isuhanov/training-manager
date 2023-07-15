import * as S from '../styles/components';
import RecordsContainer from './RecordsContainer';
import Section from './Section';


const Main = () => {

    return (
        <S.Main>
            <S.Container>
                <Section title="Записи">
                    <RecordsContainer />
                </Section>                
            </S.Container>
        </S.Main>
    );
};

export default Main;