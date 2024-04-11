 

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth.module';
import { UserModule } from './user.module';
import { User1 as User } from './user.entity';
import { PassportModule } from '@nestjs/passport'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:"localhost",
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [User],  
      synchronize: true, 
    }),
    AuthModule,
    UserModule,
    PassportModule
  ],
})
export class AppModule {}
