import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginData } from './dtos/login-data';
import { RegisterData } from './dtos/register-data';
import { LoginValidationGuard } from './login-validation.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LoginValidationGuard)
  @Post('login')
  async login(@Body() loginData: LoginData) {
    return this.authService.login(loginData);
  }

  @Post('register')
  async register(@Body() registerData: RegisterData) {
    return this.authService.register(registerData);
  }
}
