import { ReactNode, createContext, useState } from "react";
import { IRecord } from "../ts/interfaces/globals/record";

/**
 * Интерфейс контекста массива записей тренеровок
 */
interface IRecordsContext {
    /** Массив записей тренеровко */
    records: IRecord[],
    /** Функция добавления записей в массив */    
    setRecords: (records: IRecord[]) => void,
    /** Функция удаления записи */    
    deleteRecord: (id: number) => void,
}

/**
 * Контекста для работы с записями тренеровок
 */
export const RecordsContext = createContext<IRecordsContext>({
    records: [],
    setRecords: (records: IRecord[]) => {},
    deleteRecord: (id: number) => {},
});

/**
 * Компонент для работы с контекстом записей тренеровок
 */
export const RecordsState = ({ children }: { children: ReactNode }) => {
    const [records, setRecords] = useState<IRecord[]>([]);
    
    const deleteRecord = (id: number) => {
        setRecords(prev => prev.filter(record => record.id !== id));
    }
    
    return (
        <RecordsContext.Provider value={{records, setRecords, deleteRecord}}>
            { children }
        </RecordsContext.Provider>
    );
}