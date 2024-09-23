import { Module } from '@nestjs/common';
import { UserResolver } from 'src/presentation/resolvers/user.resolver';

@Module({
  providers: [UserResolver],
})
export class UserModule {}
