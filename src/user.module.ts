
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User1 } from './user.entity';
import { PassportModule } from '@nestjs/passport'; 

@Module({
  imports: [TypeOrmModule.forFeature([User1]) ,PassportModule ,],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
