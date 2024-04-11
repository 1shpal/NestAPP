 
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User1 as User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async generateJwtToken(user: User): Promise<string> {
    const payload = { username: user.username, sub: user.id };
    return this.jwtService.sign(payload);
  }
}
