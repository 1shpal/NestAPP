
import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express'; 
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('register')
  async register(@Body() body: { username: string; password: string }, @Res() res: Response): Promise<void> {
    const { username, password } = body;
    try {
      const user = await this.userService.createUser(username, password);
      const accessToken = await this.authService.generateJwtToken(user);
      res.status(HttpStatus.CREATED).json({
        message: 'User registered successfully',
        userId: user.id,
        username: user.username,
        accessToken,
      });
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        res.status(HttpStatus.CONFLICT).json({ message: 'Username already exists' });
      } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'An unexpected error occurred' });
      }
    }
  }

  @Post('login')
  async login(@Body() body: { username: string; password: string }, @Res() res: Response): Promise<void> {
    const { username, password } = body;
    const user = await this.userService.findUserByUsername(username);
    if (!user || user.password !== password) {
       res.status(401).json({ message: 'Invalid username or password' });
    }
    const accessToken = await this.authService.generateJwtToken(user);
    res.status(200).json({
      message: 'Login successful',
      userId: user.id,
      username: user.username,
      accessToken,
    });
  }
}
