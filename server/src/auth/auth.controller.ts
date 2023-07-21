import { Controller, UseGuards, Post, Request } from '@nestjs/common';

import { LocalAuthGuard } from './strategy/local/local-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req: any) {
        return this.authService.login(req.user);
    }
}
