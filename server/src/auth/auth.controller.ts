import { Controller, UseGuards, Post, Body } from '@nestjs/common';
import { LocalAuthGuard } from './strategy/local/local-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Body() user: any) {
        return this.authService.login(user);
    }
}
