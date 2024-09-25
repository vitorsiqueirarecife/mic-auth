import { Injectable, Inject } from '@nestjs/common';
import { IUserModel } from 'src/domain/interfaces/user.model.interface';
import { IUserService } from 'src/domain/interfaces/user.service.interface';
import { SUser } from 'src/infrastructure/db/mongodb/schemas/user.schema';

@Injectable()
export class UserService implements IUserService {
  constructor(@Inject('IUserModel') private userModel: IUserModel) {}

  async create(user: SUser): Promise<SUser> {
    return this.userModel.create(user);
  }

  async findByName(name: string): Promise<SUser[]> {
    return this.userModel.findByName(name);
  }
}
