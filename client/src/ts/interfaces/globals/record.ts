/** Интерфейс записи тренировки */
export interface IRecord {
    id: number;
    training: 'running' | 'swimming' | 'cycling' | 'strength';
    time: string;
    result: string;
    repeats?: string;
    date: string;
}