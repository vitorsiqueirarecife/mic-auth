import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from 'src/application/services/user.service';
import { UserResolver } from 'src/presentation/resolvers/user.resolver';
import { SUser, UserSchema } from '../db/mongodb/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SUser.name, schema: UserSchema }]),
  ],
  providers: [UserResolver, UserService],
  exports: [],
})
export class UserModule {}
