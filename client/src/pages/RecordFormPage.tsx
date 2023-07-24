import { useParams } from "react-router-dom";
import RecordForm from "../components/records/RecordForm";
import Section from "../components/Section";

/** Страница создания/изменения записей тренировок */
const RecordFormPage = () => {
    const { id } = useParams();
    return (
        <Section title={id ? 'Изменение' : 'Добавление'}>
            <RecordForm />
        </Section>
    );
}

export default RecordFormPage;