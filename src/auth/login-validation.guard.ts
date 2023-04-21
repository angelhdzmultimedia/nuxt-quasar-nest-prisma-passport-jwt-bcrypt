import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { LoginData } from './dtos/login-data';

@Injectable()
export class LoginValidationGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const loginData: LoginData = new LoginData();
    Object.assign(loginData, request.body);
    const errors = await validate(loginData);
    if (errors.length) {
      throw new BadRequestException(errors);
    }
    return true;
  }
}
