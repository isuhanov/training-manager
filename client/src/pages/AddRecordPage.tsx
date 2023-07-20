import { useParams } from "react-router-dom";
import AddRecord from "../components/AddRecord";
import Section from "../components/Section";

const AddRecordPage = () => {
    const { id } = useParams();
    return (
        <Section title={id ? 'Изменение' : 'Добавление'}>
            <AddRecord />
        </Section>
    );
}

export default AddRecordPage;