
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User1 } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User1)
    private readonly userRepository: Repository<User1>,
  ) {}

  async createUser(username: string, password: string): Promise<User1> {
    const user = new User1();
    user.username = username;
    user.password = password;
    return this.userRepository.save(user);
  }

  async findUserByUsername(username: string): Promise<User1 | undefined> {
    return this.userRepository.findOne({ where: { username } });
  }

  async findAllUsers(): Promise<User1[]> {
    return this.userRepository.find();
  }
}
