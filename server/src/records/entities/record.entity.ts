import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Record {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;
    
    @Column()
    time: string;
    
    @Column()
    result: number;
    
    @Column({ nullable: true })
    repeats: number;

    @CreateDateColumn()
    date: Date
}