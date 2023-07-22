import { Controller, Get, Post, Put, Body, UseGuards, Req } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/strategy/jwt/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getUser(@Req() req: any) {
        const { password, id, ...user } = await this.userService.getOne(req.user.login)
        return user;
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return await this.userService.create(createUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    async updateUser(@Body() updateUserDto: UpdateUserDto, @Req() req: any) {
        return await this.userService.update(updateUserDto, req.user.id);
    }
}
