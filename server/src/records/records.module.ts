import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RecordsController } from './records.controller';
import { RecordsService } from './records.service';
import { Record } from './entities/record.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Record])
    ],
    providers: [RecordsService],
    controllers: [RecordsController],
    exports: [TypeOrmModule]
})
export class RecordsModule {}
