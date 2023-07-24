import { useContext } from "react";
import { RecordsContext } from "../../context/RecordsContext";

/** Хук для работы с контекстом записей тренировок */
export const useRecords = () => useContext(RecordsContext);
