import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from 'src/application/services/user.service';
import { UserResolver } from 'src/presentation/resolvers/user.resolver';
import { SUser, UserSchema } from '../db/mongodb/schemas/user.schema';
import { MongooseUserModel } from '../db/mongodb/models/mongoose.user.model';
import { USER_SERVICE } from 'src/domain/interfaces/user.service.interface';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SUser.name, schema: UserSchema }]),
  ],
  providers: [
    UserResolver,
    { provide: USER_SERVICE, useClass: UserService },
    { provide: 'IUserModel', useClass: MongooseUserModel },
  ],
  exports: [USER_SERVICE],
})
export class UserModule {}
