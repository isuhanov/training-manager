import Section from "../components/Section";
import RecordsContainer from "../components/records/RecordsContainer";

/** Страница записей тренировок */
const RecordsPage = () => {
    return (
        <Section title="Записи">
            <RecordsContainer />
        </Section>
    );
}

export default RecordsPage;