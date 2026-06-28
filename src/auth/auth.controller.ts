import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { ILoginRequestDto } from './dto/request/login.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginRequest: ILoginRequestDto) {
    return this.authService.login(loginRequest);
  }
}
