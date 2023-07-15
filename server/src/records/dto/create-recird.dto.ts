export class CreateRecordDto {
    readonly type: string;
    readonly time: string;
    readonly result: number;
    readonly repeats?: number;
}