import { Injectable, Inject } from '@nestjs/common';
import { IUser } from 'src/domain/interfaces/user.interface';
import {
  IUserRepository,
  USER_REPOSITORY,
} from 'src/domain/interfaces/user.repository.interface';
import { IUserService } from 'src/domain/interfaces/user.service.interface';

@Injectable()
export class UserService implements IUserService {
  constructor(@Inject(USER_REPOSITORY) private userModel: IUserRepository) {}

  async create(user: IUser): Promise<IUser> {
    return this.userModel.create(user);
  }

  async findByName(name: string): Promise<IUser[]> {
    return this.userModel.findByName(name);
  }
}
