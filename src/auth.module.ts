// // src/auth.module.ts

// import { Module } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';
// import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';
// import { PassportModule } from '@nestjs/passport';
// import { JwtStrategy } from  './jwt.strategy'

// @Module({
//   imports: [
//     PassportModule,
//     JwtModule.register({
//       secret: 'your_secret_key',
//       signOptions: { expiresIn: '1d' }, // You can adjust token expiration as needed
//     }),
//   ],
//   providers: [AuthService, JwtStrategy],
//   controllers: [AuthController],
// })
// export class AuthModule {}


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { User1 as User } from './user.entity';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), 
    PassportModule,
    JwtModule.register({
      secret: 'vanshpal',
      signOptions: { expiresIn: '1d' }, 
    }),
  ],
  providers: [AuthService, UserService, JwtStrategy], 
  controllers: [AuthController],
})
export class AuthModule {}

