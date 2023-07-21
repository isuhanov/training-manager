import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt";

import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}
  
    async validateUser(login: string, password: string): Promise<any> {
        const user = await this.usersService.getOne(login);
        const isMatch = await bcrypt.compare(password, user.password);
        if (user && isMatch) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { login: user.login, id: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
