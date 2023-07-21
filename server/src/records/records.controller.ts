import { Body, Controller, Get, Param, Post, Put, Delete, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';

import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { RecordsService } from './records.service';
import { Record } from './entities/record.entity';
import { JwtAuthGuard } from 'src/auth/strategy/jwt/jwt-auth.guard';

@Controller('records')
@UseGuards(JwtAuthGuard)
export class RecordsController {

    constructor(private readonly recordsService: RecordsService) {}

    @Get()
    getAll(@Req() req: any): Promise<Record[]> {
        return this.recordsService.getAllByUserId(req.user.id); 
    }

    @Get(':id')
    getOne(@Param('id') id: number, @Req() req: any): Promise<Record> {
        return this.recordsService.getById(id, req.user.id); 
    }

    @Post()
    createRecord(@Body() createRecordDto: CreateRecordDto, @Req() req: any): Promise<any> {
        return this.recordsService.create(createRecordDto, req.user.id); 
    }

    @Put()
    updateRecord(@Body() updateRecordDto: UpdateRecordDto, @Req() req: any): Promise<void> {
        return this.recordsService.update(updateRecordDto, req.user.id); 
    }

    @Delete(':id')
    deleteRecord(@Param('id') id: number, @Req() req: any): Promise<void> {
        return this.recordsService.delete(id, req.user.id); 
    }
}
