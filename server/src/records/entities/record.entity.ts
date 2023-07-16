import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Record {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    training: string;
    
    @Column()
    time: string;

    @Column()
    result: string

    @Column({ nullable:true })
    repeats: string;

    @CreateDateColumn()
    date: Date
}