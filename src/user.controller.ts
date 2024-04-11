
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { PassportModule } from '@nestjs/passport'; 
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard('jwt')) 
  async findAll(): Promise<{ users: any[] }> {
    const users = await this.userService.findAllUsers();
    return { users };
  }
}

