 

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth.module';
import { UserModule } from './user.module';
import { User1 as User } from './user.entity';
import { PassportModule } from '@nestjs/passport'; 

// TypeOrmModule.forRoot({
//   type: 'mysql',
//   host:"localhost",
//   port: 3306,
//   username: 'root',
//   password: '',
//   database: 'test',
//   entities: [User],  
//   synchronize: true, 
// }),

// @Module({
//   imports: [
// TypeOrmModule.forRoot({
//   type: 'mysql',
//   host:"mysql-1ab88fad-vanshpal0203projects-b372.b.aivencloud.com",
//   port: 26893,
//   username: 'avnadmin',
//   password: 'AVNS_gYjbz3Hvs9MUUWWh6fe',
//   database: 'defaultdb',
//   entities: [User],  
//   synchronize: true, 
// }),
//     AuthModule,
//     UserModule,
//     PassportModule
//   ],
// })


@Module({
  imports: [
TypeOrmModule.forRoot({
  type: 'mysql',
  host:"mysql-1ab88fad-vanshpal0203projects-b372.b.aivencloud.com",
  port: 26893,
  username: 'avnadmin',
  password: 'AVNS_gYjbz3Hvs9MUUWWh6fe',
  database: 'defaultdb',
  entities: [User],  
  synchronize: true, 
}),
    AuthModule,
    UserModule,
    PassportModule
  ],
})

export class AppModule {
  
}




// TypeOrmModule.forRoot({
//   type: 'mysql',
//   host:process.env.HOST,
//   port: 3306,
//   username: process.env.USERNAME,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
//   entities: [User],  
//   synchronize: true, 
// }),
