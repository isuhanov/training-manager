import { useParams } from "react-router-dom";
import RecordForm from "../components/records/RecordForm";
import Section from "../components/Section";

const RecordFormPage = () => {
    const { id } = useParams();
    return (
        <Section title={id ? 'Изменение' : 'Добавление'}>
            <RecordForm />
        </Section>
    );
}

export default RecordFormPage;