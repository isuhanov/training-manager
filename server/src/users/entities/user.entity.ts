import { Record } from "src/records/entities/record.entity";
import { Gender } from "src/ts/types/gender";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    login:string;

    @Column()
    password:string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({
        type: 'enum',
        enum: ['male', 'female']
    })
    gender: Gender

    @Column({ type: 'date' })
    birthday: Date;

    @OneToMany(type => Record, record => record.user)
    records: Record[];
}