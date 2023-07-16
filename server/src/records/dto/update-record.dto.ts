export class UpdateRecordDto {
    readonly id: number;
    readonly training: string;
    readonly time: string;
    readonly result: string;
    readonly repeats?: string;
    readonly date: Date;
}