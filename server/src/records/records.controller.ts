import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';

import { CreateRecordDto } from './dto/create-recird.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { RecordsService } from './records.service';
import { Record } from './entities/record.entity';

@Controller('records')
export class RecordsController {

    constructor(private readonly recordsService: RecordsService) {}

    @Get()
    getAll(): Promise<Record[]> {
        return this.recordsService.getAll(); 
    }

    @Get(':id')
    getOne(@Param('id') id: number): Promise<Record> {
        return this.recordsService.getById(id); 
    }

    @Post()
    createRecord(@Body() createRecordDto: CreateRecordDto): Promise<Record> {
        return this.recordsService.create(createRecordDto); 
    }

    @Put()
    updateRecord(@Body() updateRecordDto: UpdateRecordDto): Promise<void> {
        return this.recordsService.update(updateRecordDto); 
    }

    @Delete(':id')
    deleteRecord(@Param('id') id: number): Promise<void> {
        return this.recordsService.delete(id); 
    }
}
