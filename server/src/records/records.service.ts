import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateRecordDto } from './dto/update-record.dto';
import { CreateRecordDto } from './dto/create-record.dto';
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

    async create(createRecordDto: CreateRecordDto): Promise<Record> {
        const newRecord =  this.recordRepository.create(createRecordDto);
        return await this.recordRepository.save(newRecord); 
    }

    async update(updateRecordDto: UpdateRecordDto): Promise<void> {
        try {
            await this.recordRepository.update(updateRecordDto.id, updateRecordDto); 
        } catch (err) {
            console.log(err);
        } 
    }

    async delete(id: number): Promise<void> {
        try {
            await this.recordRepository.delete(id);; 
        } catch (err) {
            console.log(err);
        }
    }

}
