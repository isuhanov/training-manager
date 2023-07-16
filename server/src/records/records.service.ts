import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateRecordDto } from './dto/update-record.dto';
import { CreateRecordDto } from './dto/create-recird.dto';
import { Record } from './entities/record.entity';

@Injectable()
export class RecordsService {

    constructor(
        @InjectRepository(Record) 
        private readonly recordRepository: Repository<Record>,
    ) {}

    async getAll(): Promise<Record[]> {
        return await this.recordRepository.find({
            order: {
                date: "DESC",
            },
        });
    }

    async getById(id: number): Promise<Record> {
        return await this.recordRepository.findOne({
            where: {
                id
            }
        }); 
    }

    create(createRecordDto: CreateRecordDto): string {
        return 'create'; 
    }

    update(updateRecordDto: UpdateRecordDto, id: number): string {
        return 'update'; 
    }

    delete(id: number): string {
        return 'delete'; 
    }

}
