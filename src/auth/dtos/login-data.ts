import { IsString, IsNotEmpty } from 'class-validator';

export class LoginData {
  @IsString()
  @IsNotEmpty()
  email;

  @IsString()
  @IsNotEmpty()
  password;
}
