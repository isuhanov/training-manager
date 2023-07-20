import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from "bcrypt";

import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) 
        private readonly userRepository: Repository<User>,
    ) {}


    async getOne(login: string): Promise<User | undefined> {
        return this.userRepository.findOne({
            where: {
                login
            }
        });
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const newUser =  this.userRepository.create(createUserDto);
        const salt = await bcrypt.genSalt(10); // соль для хэша
        const hash = await bcrypt.hash(newUser.password, salt); // хэширование пароля
        return await this.userRepository.save({...newUser, password: hash}); 
    }
}
