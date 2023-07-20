import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(type => User, user => user.records)
    user: User;
}