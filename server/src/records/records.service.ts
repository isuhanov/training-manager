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

    async getAllByUserId(userId: number): Promise<Record[]> {
        return await this.recordRepository.find({
            where: {
                user: {
                    id: userId
                }
            },
            order: {
                date: "DESC",
            },
        });
    }

    async getById(id: number, userId: number): Promise<Record> {
        return await this.recordRepository.findOne({
            where: {
                id,
                user: {
                    id: userId
                }
            }
        }); 
    }

    async create(createRecordDto: CreateRecordDto, userId: number): Promise<Record> {
        const newRecord =  this.recordRepository.create({
            ...createRecordDto, 
            user: { 
                id: userId
            }
        });        
        return await this.recordRepository.save(newRecord); 
    }

    async update(updateRecordDto: UpdateRecordDto, userId: number): Promise<void> {
        try {
            await this.recordRepository.update({
                id: updateRecordDto.id,
                user: {
                    id: userId
                }
            }, updateRecordDto); 
        } catch (err) {
            console.log(err);
        } 
    }

    async delete(id: number, userId: number): Promise<void> {
        try {
            await this.recordRepository.delete({
                id,
                user: {
                    id: userId
                }
            });; 
        } catch (err) {
            console.log(err);
        }
    }

}
