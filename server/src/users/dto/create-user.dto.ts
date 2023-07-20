import { Gender } from "src/ts/types/gender";

export class CreateUserDto {
    readonly login: string;
    readonly password: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly gender: Gender;
    readonly birthday: Gender;
}