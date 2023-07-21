import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';



import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './strategy/local/local.strategy';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategy/jwt/jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
    imports: [
        UsersModule, 
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1d' },
        }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
