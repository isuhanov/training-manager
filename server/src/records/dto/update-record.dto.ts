export class UpdateRecordDto {
    readonly id: number;
    readonly type: string;
    readonly time: string;
    readonly result: number;
    readonly repeats?: number;
    readonly date: Date;
}