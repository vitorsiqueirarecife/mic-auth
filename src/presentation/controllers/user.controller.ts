import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/application/dtos/create-user.dto';

@Controller('users')
export class UserController {
  constructor() {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return { message: 'User created successfully', user: createUserDto };
  }
}
