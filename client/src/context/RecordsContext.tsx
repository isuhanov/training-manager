import { ReactNode, createContext, useState } from "react";
import { IRecord } from "../ts/interfaces/globals/record";

/** Интерфейс контекста массива записей тренеровок */
interface IRecordsContext {
    /** Массив записей тренеровко */
    records: IRecord[],
    /** Функция добавления записей в массив */    
    setRecords: (records: IRecord[]) => void,
    /** Функция удаления записи из массива */    
    removeRecord: (id: number) => void,
}

/** Контекст для работы с записями тренеровок */
export const RecordsContext = createContext<IRecordsContext>({
    records: [],
    setRecords: (records: IRecord[]) => {},
    removeRecord: (id: number) => {},
});

/** Компонент для работы с контекстом записей тренеровок */
export const RecordsProvider = ({ children }: { children: ReactNode }) => {
    const [records, setRecords] = useState<IRecord[]>([]);
    
    const removeRecord = (id: number) => {
        setRecords(prev => prev.filter(record => record.id !== id));
    }
    
    return (
        <RecordsContext.Provider value={{records, setRecords, removeRecord}}>
            { children }
        </RecordsContext.Provider>
    );
}