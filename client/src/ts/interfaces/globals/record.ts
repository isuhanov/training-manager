export interface IRecord {
    training: 'running' | 'swimming' | 'cycling' | 'strength';
    time: string;
    results: string;
    repeats?: string;
}