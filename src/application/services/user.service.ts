import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SUser, UserDocument } from 'src/infrastructure/db/mongodb/schemas/user.schema';


@Injectable()
export class UserService {
  constructor(
    @InjectModel(SUser.name) private userModel: Model<UserDocument>,
  ) {}

  async findUsersByName(name: string): Promise<SUser[]> {
    return this.userModel.find({ name: { $regex: name, $options: 'i' } }).exec();
  }
}
