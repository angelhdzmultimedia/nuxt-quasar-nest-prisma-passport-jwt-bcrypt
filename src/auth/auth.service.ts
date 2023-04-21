import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { users } from 'src/database';
import { User } from 'src/types/user';
import { LoginData } from './dtos/login-data';
import { compare, hash } from 'bcryptjs';
import { RegisterData } from './dtos/register-data';
import { randomUUID } from 'node:crypto';

@Injectable()
export class AuthService {
  async login(loginData: LoginData) {
    const user: User | undefined = users.find(
      (user) => user.email === loginData.email,
    );

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isPasswordValid: boolean = await compare(
      loginData.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Email or password not valid');
    }

    const { password, ...result } = user;
    return result;
  }

  async register(registerData: RegisterData) {
    const user: User | undefined = users.find(
      (user) => user.email === registerData.email,
    );

    if (user) {
      throw new ConflictException('User already exists');
    }

    const newUser = {
      ...registerData,
      password: await hash(registerData.password, 10),
      role: 'user',
      id: randomUUID(),
    };

    users.push(newUser);

    const { password, ...result } = newUser;
    return result;
  }
}
