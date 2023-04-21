import { IsString, IsNotEmpty } from 'class-validator';

export class RegisterData {
  @IsString()
  @IsNotEmpty()
  email;

  @IsString()
  @IsNotEmpty()
  password;

  @IsString()
  @IsNotEmpty()
  name;
}
