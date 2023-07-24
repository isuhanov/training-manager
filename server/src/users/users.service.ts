import { Injectable, BadRequestException, ConflictException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from "bcryptjs";


import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) 
        private readonly userRepository: Repository<User>,
    ) {}

    /** Получение пользователя по логину */
    async getOne(login: string): Promise<User | undefined> {
        return this.userRepository.findOne({
            where: {
                login
            }
        });
    }

    /** Создание пользователя */
    async create(createUserDto: CreateUserDto): Promise<any> {
        const user = await this.getOne(createUserDto.login);
        if (user) throw new ConflictException('Account already exists');

        const newUser =  this.userRepository.create(createUserDto);
        const salt = await bcrypt.genSalt(10); // соль для хэша
        const hash = await bcrypt.hash(newUser.password, salt); // хэширование пароля
        try {
            await this.userRepository.save({...newUser, password: hash}); 
        } catch (err) {
            console.log(err);
            throw new InternalServerErrorException('Registration error');
        }
    }

    /** Изменение пользователя */
    async update(updateUserDto: UpdateUserDto, id: number): Promise<any> {
        const user = await this.getOne(updateUserDto.login);
        if (user && user.id !== id) throw new ConflictException('Account already exists');

        const data = {...updateUserDto};

        if (updateUserDto.password) {
            const salt = await bcrypt.genSalt(10); // соль для хэша
            const hash = await bcrypt.hash(updateUserDto.password, salt); // хэширование пароля
            data.password = hash;
        } else {
            data.password = undefined;
        }
        
        try {
            await this.userRepository.update(id, data); 
        } catch (err) {
            console.log(err);
            throw new InternalServerErrorException('Update error');
        }

    }
}
